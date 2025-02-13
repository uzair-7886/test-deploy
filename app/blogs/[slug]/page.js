import { groq } from "next-sanity"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
import { PortableText } from "next-sanity"
import RichText from "./RichText"

// 1. ADD THIS FUNCTION
export async function generateStaticParams() {
  // Fetch all the slugs from Sanity
  const query = groq`*[_type == "post" && defined(slug.current)][].slug.current`
  const slugs = await client.fetch(query)

  // Return them in the format: [{ slug: "..." }, { slug: "..." }]
  return slugs.map((slug) => ({
    slug,
  }))
}

// (Optional) Add a revalidate time if you want ISR
export const revalidate = 60; // Re-generate after 60 seconds

export default async function Post({ params: { slug } }) {
  // GROQ query
  const query = groq`
    *[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      mainImage {
        asset->{
          url
        },
        alt
      },
      publishedAt,
      body
    }
  `
  const post = await client.fetch(query, { slug })

  if (!post) {
    return <div className="p-5">Post not found.</div>
  }

  return (
    <article className="p-5 md:p-10 pb-28 post max-w-7xl mx-auto">
      {/* Header Section with Full Image */}
      <section>
        {post.mainImage?.asset?.url && (
          <div className="relative w-full h-96 md:h-[600px]">
            <Image
              className="object-cover"
              src={urlFor(post.mainImage).url()}
              alt={post.mainImage.alt || "Blog image"}
              fill
              priority
            />
          </div>
        )}
        {/* Title & Publish Date */}
        <div className="mt-5">
          <h1 className="text-4xl font-extrabold text-mainBlue font-enriqueta">
            {post.title}
          </h1>
          {post.publishedAt && (
            <p className="mt-2 text-gray-600 font-roboto">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          )}
        </div>
      </section>

      {/* Body Content */}
      <section className="text-gray-900 mt-8">
        <PortableText value={post.body} components={RichText} />
      </section>
    </article>
  )
}
