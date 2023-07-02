'use client';

import { Container, DividerX, Flex } from '@/app/theme/shared';
import { Video } from '@/types/videos';
import { useState } from 'react';
import OrderBy from './OrderBy';
import Pagination from './Pagination';
import VideoFilter from './VideoFilter';
import VideoModal from './VideoModal';
import VideoSection from './VideoSection';

const VideoGallery = () => {
  const [filter, setFilter] = useState<number | null>(null);
  const [order, setOrder] = useState('');
  const [page, setPage] = useState(0);
  const [videoCount, setVideoCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [video, setVideo] = useState<Video | null>(null);

  const openModal = (videoInfo: Video) => {
    setVideo(videoInfo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Flex>
        <VideoFilter filter={filter} setFilter={setFilter} />
        <OrderBy order={order} setOrder={setOrder} />
      </Flex>
      <DividerX />
      <VideoSection
        filter={filter}
        order={order}
        setVideoCount={setVideoCount}
        page={page}
        onVideoClick={openModal}
      />
      <VideoModal isOpen={isModalOpen} onClose={closeModal} video={video} />
      <DividerX />
      <Pagination page={page} setPage={setPage} videoCount={videoCount} />
    </Container>
  );
};

export default VideoGallery;
