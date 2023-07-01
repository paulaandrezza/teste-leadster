'use client';

import videos from '@/data/videos.json';
import VideoCard from './VideoCard';
import { Items } from './styles';

const VideoSection = () => {
  return (
    <Items>
      {videos.map((video) => (
        <VideoCard key={video.id} {...video} />
      ))}
    </Items>
  );
};

export default VideoSection;
