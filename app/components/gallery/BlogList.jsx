import React from "react";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import ClientSideRoute from "./ClientSideRoute";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function BlogList({ posts, isLoading }) {
  return (
    <div>
      <div className="scroll-smooth focus:scroll-auto min-h-[30em] grid grid-cols-1 md:grid-cols-2 md:px-10 px-5 gap-10 md:gap-y-16 pb-24 gap-y-10">
        {isLoading ? (
          // Render skeletons while loading
          Array(4).fill().map((_, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative w-full md:h-64 h-48">
                <Skeleton height="100%" />
              </div>
              <div className="mt-5">
                <Skeleton width={200} height={24} />
                <Skeleton count={2} />
              </div>
            </div>
          ))
        ) : (
          // Render actual posts when loaded
          posts.map((post) => (
            <ClientSideRoute
              key={post._id}
              route={`/post/${post.slug.current}`}
            >
              <div className="flex flex-col group cursor-pointer">
                {/* Image Container */}
                <div className="relative w-full md:h-64 h-48 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                  {post.mainImage && post.mainImage.asset && (
                    <Image
                      className="object-cover object-center bg-gray-200"
                      src={urlFor(post.mainImage).url()}
                      alt={post.mainImage.alt || "Blog image"}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  )}
                  {/* Title & Published Date Overlay */}
                  <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-3 flex flex-col">
                    <p className="font-bold text-lg md:text-xl">{post.title}</p>
                    {post.publishedAt && (
                      <p>
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    )}
                  </div>
                </div>
                {/* Title & "Read Post" Section */}
                <div className="mt-5 flex-1">
                  <p className="underline text-lg font-bold">{post.title}</p>
                </div>
                <div className="flex justify-start items-center space-x-2">
                  <p className="text-yellow-400 dark:text-purple-400 font-bold text-lg md:text-xl group-hover:underline">
                    Read Post
                  </p>
                  <div className="text-yellow-400 dark:text-purple-400">
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
                        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 
                          0-2.062.18-3 .512v14.25A8.987 8.987 0 
                          016 18c2.305 0 4.408.867 6 
                          2.292m0-14.25a8.966 8.966 
                          0 016-2.292c1.052 0 2.062.18 3 
                          .512v14.25A8.987 8.987 0 0018 
                          18a8.967 8.967 0 00-6 
                          2.292m0-14.25v14.25" 
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </ClientSideRoute>
          ))
        )}
      </div>
    </div>
  );
}

export default BlogList;
