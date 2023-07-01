'use client';

import { Container, DividerX, Flex, Text } from '@/app/theme/shared';
import { useState } from 'react';
import VideoCard from './VideoCard';
import VideoFilter from './VideoFilter';
import { Select, Wrapper } from './styles';

const VideoGallery = () => {
  const [filter, setFilter] = useState<number | null>(null);

  return (
    <Container>
      <Flex>
        <VideoFilter filter={filter} setFilter={setFilter} />
        <Wrapper>
          <label htmlFor="orderBy">
            <Text fontWeight={'bold'}>Ordenar por</Text>
          </label>
          <Select name="orderBy" id="orderBy">
            <option value="DataDePublicação">Data de publicação</option>
            <option value="maisRecente">Mais recente</option>
            <option value="maisAntigo">Mais antigo</option>
          </Select>
        </Wrapper>
      </Flex>
      <DividerX />
      <VideoCard />
    </Container>
  );
};

export default VideoGallery;
