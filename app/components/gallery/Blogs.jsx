'use client'
import React, { useEffect, useState } from 'react'
import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import ClientSideRoute from './ClientSideRoute'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Blogs = () => {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // Basic GROQ query to fetch all posts, ordered by publishedAt
  const query = groq`
    *[_type == "post"] | order(_createdAt asc) {
      _id,
      title,
      slug,
      mainImage {
        asset->{
          url
        },
        alt
      },
      publishedAt
    }
  `

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true)
      try {
        const data = await client.fetch(query)
        setPosts(data)
      } catch (error) {
        console.error('Error fetching posts:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchPosts()
  }, [])

  return (
    <div className="min-h-screen px-5 py-4 md:px-10 max-w-7xl mx-auto">

      {isLoading ? (
        // Render skeleton placeholders
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-24">
          {Array(4).fill().map((_, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative w-full md:h-64 h-48">
                <Skeleton height="100%" />
              </div>
              <div className="mt-5">
                <Skeleton width={200} height={24} />
                <Skeleton count={2} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Render posts when loaded
        <>
          {posts.length === 0 && <div>No posts found.</div>}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-24">
            {posts.map((post) => (
              <ClientSideRoute
                key={post._id}
                route={`/blogs/${post.slug.current}`}
              >
                <div className="flex flex-col group cursor-pointer">
                  {/* Image Container */}
                  <div className="relative w-full md:h-64 h-48 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                    {post.mainImage?.asset?.url && (
                      <Image
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt || 'Blog image'}
                        fill
                        className="object-cover object-center bg-gray-200"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    )}
                    {/* Title & Published Date Overlay */}
                    <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg font-enriqueta text-white p-3 flex flex-col">
                      <p className="font-bold text-lg md:text-xl">
                        {post.title}
                      </p>
                      {post.publishedAt && (
                        <p>
                          {new Date(post.publishedAt).toLocaleDateString(
                            'en-US',
                            {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric',
                            }
                          )}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Title & "Read Post" Link */}
                  
                  <div className="mt-2 flex items-center space-x-2">
                    <p className="text-mainBlue font-enriqueta font-bold text-lg md:text-xl group-hover:underline">
                      Read Post
                    </p>
                    <div className="text-mainBlue">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 
                          .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 
                          6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 
                          2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 
                          8.967 0 00-6 2.292m0-14.25v14.25"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </ClientSideRoute>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Blogs
