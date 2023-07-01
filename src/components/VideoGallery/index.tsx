'use client';

import { Container, DividerX, Flex } from '@/app/theme/shared';
import { useState } from 'react';
import OrderBy from './OrderBy';
import VideoFilter from './VideoFilter';
import VideoSection from './VideoSection';

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
      <VideoSection />
    </Container>
  );
};

export default VideoGallery;
