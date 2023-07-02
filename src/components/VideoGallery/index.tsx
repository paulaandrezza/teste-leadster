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
  const [page, setPage] = useState<number | null>(null);

  return (
    <Container>
      <Flex>
        <VideoFilter filter={filter} setFilter={setFilter} />
        <OrderBy order={order} setOrder={setOrder} />
      </Flex>
      <DividerX />
      <VideoSection filter={filter} order={order} />
      <DividerX />
      <Pagination page={page} setPage={setPage} />
    </Container>
  );
};

export default VideoGallery;
