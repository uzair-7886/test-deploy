// schemas/video.js
export default {
    name: 'video',
    title: 'Video',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'The title of the video',
      },
      {
        name: 'video',
        title: 'Video File',
        type: 'file',
        options: {
          accept: 'video/*',
        },
        description: 'Upload a video file',
      },
    ],
  };
  