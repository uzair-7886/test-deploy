import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const RichText = {
  // Defines how images inside the Portable Text are handled
  types: {
    image: ({ value }) => (
      <div className="relative w-full md:h-96 h-60 md:m-10 mx-auto">
        <Image
          className="object-contain"
          src={urlFor(value).url()}
          alt="Blog Post Image"
          fill
        />
      </div>
    ),
  },

  // Defines how lists (bulleted, numbered) are rendered
  list: {
    bullet: ({ children }) => (
      <ul className="font-roboto ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="font-roboto mt-lg list-decimal">{children}</ol>
    ),
  },

  // Defines how different block types (paragraph, h1, h2, etc.) are rendered
  block: {
    // Normal paragraph text
    normal: ({ children }) => (
      <p className="font-roboto text-lg md:text-xl text-justify  text-textColor">{children}</p>
    ),

    // Heading 1
    h1: ({ children }) => (
      <h1 className="font-enriqueta text-mainBlue text-3xl md:text-4xl py-10 font-bold">
        {children}
      </h1>
    ),

    // Heading 2
    h2: ({ children }) => (
      <h2 className="font-enriqueta text-mainBlue text-xl py-5 font-bold">
        {children}
      </h2>
    ),

    // Heading 3
    h3: ({ children }) => (
      <h3 className="font-enriqueta text-mainBlue text-2xl py-5 font-bold">
        {children}
      </h3>
    ),

    // Heading 4
    h4: ({ children }) => (
      <h4 className="font-enriqueta text-mainBlue text-lg py-5 font-bold">
        {children}
      </h4>
    ),

    // Blockquote
    blockquote: ({ children }) => (
      <blockquote className="font-roboto border-l-8 border-mainBlue pl-5 py-5 my-5 bg-gray-200 italic text-black">
        {children}
      </blockquote>
    ),
  },

  // Defines how inline marks (link, highlight, etc.) are rendered
  marks: {
    // Custom "highlight" mark
    highlight: ({ children }) => (
      <span className="font-roboto text-lg md:text-xl px-1 bg-mainBlue/20 text-black">
        {children}
      </span>
    ),

    // Hyperlink
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="font-roboto underline decoration-mainBlue text-mainBlue"
        >
          {children}
        </Link>
      );
    },
  },
};

export default RichText;
