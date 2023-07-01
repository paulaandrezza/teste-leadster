'use client';

import { Container, DividerX, Flex } from '@/app/theme/shared';
import { useState } from 'react';
import OrderBy from './OrderBy';
import VideoCard from './VideoCard';
import VideoFilter from './VideoFilter';

const VideoGallery = () => {
  const [filter, setFilter] = useState<number | null>(null);
  const [order, setOrder] = useState('');

  return (
    <Container>
      <Flex>
        <VideoFilter filter={filter} setFilter={setFilter} />
        <OrderBy order={order} setOrder={setOrder} />
      </Flex>
      <DividerX />
      <VideoCard />
    </Container>
  );
};

export default VideoGallery;
