// import React, { useEffect, useState } from 'react';
// import { client } from '@/sanity/lib/client';

// const VideoGallery = () => {
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Ensure to fetch _id for key usage
//     setLoading(true);
//     const query = '*[_type == "video"]{_id, title, "videoUrl": video.asset->url}';
//     client.fetch(query).then((data) => {
//       setVideos(data);
//     });
//     setLoading(false);
//   }, []);

//     if (!videos || loading) {
//     return <p>Loading...</p>;
//     }

//   return (
//     <div className="container mx-auto px-4 py-6 sm:py-12">
//       <h1 className="text-3xl font-semibold text-center text-mainYellow font-enriqueta mb-8">
//         Video Gallery
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {videos.map((video) => (
//           <div
//             key={video._id}
//             className="bg-white rounded-[15px] CardShadow overflow-hidden group"
//           >
//             <div className="p-4">
//               <h2 className="text-lg font-medium text-mainBlue font-enriqueta mb-4">
//                 {video.title}
//               </h2>
//               {video.videoUrl && (
//                 <video
//                   controls
//                   className="w-full h-auto rounded-md transition-transform duration-300 group-hover:scale-105"
//                 >
//                   <source src={video.videoUrl} type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VideoGallery;


"use client";
import React from "react";

const VideoGallery = () => {
  // Hard-coded list of YouTube embeds
  const videos = [
    {
      _id: "1",
      title: "Oxford Summer Program Video 1",
      embedUrl: "https://www.youtube.com/embed/vxvlwLxhtFo",
    },
    {
      _id: "2",
      title: "Oxford Summer Program Video 2",
      embedUrl: "https://www.youtube.com/embed/YoJO8TNvxA8",
    },
    {
      _id: "3",
      title: "Oxford Summer Program Video 3",
      embedUrl: "https://www.youtube.com/embed/QUC7Zlf3fCM",
    },
    {
      _id: "4",
      title: "Oxford Summer Program Video 4",
      embedUrl: "https://www.youtube.com/embed/e_Ru9yseMqE",
    },
    {
      _id: "5",
      title: "Oxford Summer Program Video 5",
      embedUrl: "https://www.youtube.com/embed/7xygGGG1Nx8",
    },
    {
      _id: "6",
      title: "Oxford Summer Program Video 6",
      embedUrl: "https://www.youtube.com/embed/IX0fVD-w5Lc",
    },
    {
      _id: "7",
      title: "Oxford Summer Program Video 7",
      embedUrl: "https://www.youtube.com/embed/ga-cHQjigYw",
    },
    {
      _id: "8",
      title: "Oxford Summer Program Video 8",
      embedUrl: "https://www.youtube.com/embed/HZ0EBi4WcGs",
    },
    {
      _id: "9",
      title: "Oxford Summer Program Video 9",
      embedUrl: "https://www.youtube.com/embed/v1qCaCmNvTE",
    },
    {
      _id: "10",
      title: "Oxford Summer Program Video 10",
      embedUrl: "https://www.youtube.com/embed/E5QKtt04zpQ",
    },
    {
      _id: "11",
      title: "Oxford Summer Program Video 11",
      embedUrl: "https://www.youtube.com/embed/hzUtmB7t6S8",
    },
    {
      _id: "12",
      title: "Oxford Summer Program Video 12",
      embedUrl: "https://www.youtube.com/embed/tXJDfyNpByE",
    },
    {
      _id: "13",
      title: "Oxford Summer Program Video 13",
      embedUrl: "https://www.youtube.com/embed/pLJDWFGlh2Q",
    },
    {
      _id: "14",
      title: "Oxford Summer Program Video 14",
      // removed “&t=2s” for a clean embed
      embedUrl: "https://www.youtube.com/embed/9DyS4xOMAnA",
    },
    {
      _id: "15",
      title: "Oxford Summer Program Video 15",
      // removed “&t=4s” for a clean embed
      embedUrl: "https://www.youtube.com/embed/QjBcapTuHi4",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6 sm:py-12">
    

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div
            key={video._id}
            className=" rounded-[15px] CardShadow overflow-hidden group"
          >
            <div className="">
              {/* <h2 className="text-lg font-medium text-mainBlue font-enriqueta mb-4">
                {video.title}
              </h2> */}
              {video.embedUrl && (
                <div className="relative overflow-hidden" style={{ paddingBottom: "56.25%", height: 0 }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-md transition-transform duration-300 group-hover:scale-105"
                    src={video.embedUrl}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;

