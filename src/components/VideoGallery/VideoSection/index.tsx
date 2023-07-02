'use client';

import { Container } from '@/app/theme/shared';
import videos from '@/data/videos.json';
import { Videos } from '@/types/videos';
import { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { Items } from './styles';

interface Props {
  filter: number | null;
  order: string;
  setVideoCount: React.Dispatch<React.SetStateAction<number>>;
}

const VideoSection = ({ filter, order, setVideoCount }: Props) => {
  const [list, setList] = useState(videos);

  function filterBy(id: number) {
    if (filter !== null) return filter === id;
    return true;
  }

  function orderBy(newList: Videos) {
    switch (order) {
      case 'date':
        return newList.sort((a, b) => {
          const dateA = new Date(a.publicationDate);
          const dateB = new Date(b.publicationDate);
          return dateA > dateB ? 1 : -1;
        });
      case 'alphabetical':
        return newList.sort((a, b) => a.title.localeCompare(b.title));
      default:
        return newList;
    }
  }

  useEffect(() => {
    const newList = videos.filter((item) => filterBy(item.category.id));
    setVideoCount(newList.length);
    setList(orderBy(newList));
  }, [filter, order]);

  return (
    <Container>
      <Items>
        {list.map((video) => (
          <VideoCard key={video.id} {...video} />
        ))}
      </Items>
    </Container>
  );
};

export default VideoSection;
