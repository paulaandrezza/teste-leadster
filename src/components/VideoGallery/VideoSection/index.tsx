'use client';

import { Container } from '@/app/theme/shared';
import videos from '@/data/videos.json';
import { Video, Videos } from '@/types/videos';
import { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { Items } from './styles';

interface Props {
  filter: number | null;
  order: string;
  setVideoCount: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  onVideoClick: (video: Video) => void;
}

const VideoSection = ({ filter, order, setVideoCount, page, setPage, onVideoClick }: Props) => {
  const [list, setList] = useState(videos);
  const [prevPage, setPrevPage] = useState(page);

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
    setPrevPage(page);
    const newList = videos.filter((item) => filterBy(item.category.id));
    setVideoCount(newList.length);

    if (page === prevPage) setPage(0);

    const startIndex = page * 9;
    const endIndex = startIndex + 9;

    setList(orderBy(newList).slice(startIndex, endIndex));
  }, [filter, order, page]);

  return (
    <Container>
      <Items>
        {list.map((video) => (
          <VideoCard key={video.id} {...video} onClick={() => onVideoClick(video)} />
        ))}
      </Items>
    </Container>
  );
};

export default VideoSection;
