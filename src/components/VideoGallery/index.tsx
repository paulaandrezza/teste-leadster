'use client';

import { Container, DividerX, Flex } from '@/app/theme/shared';
import { useState } from 'react';
import OrderBy from './OrderBy';
import Pagination from './Pagination';
import VideoFilter from './VideoFilter';
import VideoSection from './VideoSection';

const VideoGallery = () => {
  const [filter, setFilter] = useState<number | null>(null);
  const [order, setOrder] = useState('');
  const [page, setPage] = useState(0);
  const [videoCount, setVideoCount] = useState(0);

  return (
    <Container>
      <Flex>
        <VideoFilter filter={filter} setFilter={setFilter} />
        <OrderBy order={order} setOrder={setOrder} />
      </Flex>
      <DividerX />
      <VideoSection filter={filter} order={order} setVideoCount={setVideoCount} />
      <DividerX />
      <Pagination page={page} setPage={setPage} videoCount={videoCount} />
    </Container>
  );
};

export default VideoGallery;
