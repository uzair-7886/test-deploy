import React, { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ensure to fetch _id for key usage
    setLoading(true);
    const query = '*[_type == "video"]{_id, title, "videoUrl": video.asset->url}';
    client.fetch(query).then((data) => {
      setVideos(data);
    });
    setLoading(false);
  }, []);

    if (!videos || loading) {
    return <p>Loading...</p>;
    }

  return (
    <div className="container mx-auto px-4 py-6 sm:py-12">
      <h1 className="text-3xl font-semibold text-center text-mainYellow font-enriqueta mb-8">
        Video Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div
            key={video._id}
            className="bg-white rounded-[15px] CardShadow overflow-hidden group"
          >
            <div className="p-4">
              <h2 className="text-lg font-medium text-mainBlue font-enriqueta mb-4">
                {video.title}
              </h2>
              {video.videoUrl && (
                <video
                  controls
                  className="w-full h-auto rounded-md transition-transform duration-300 group-hover:scale-105"
                >
                  <source src={video.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
