'use client';

import { Container, DividerX, Flex, List, ListItem, Text } from '@/app/theme/shared';
import VideoCard from './VideoCard';
import { ButtonSecondary, Select, Wrapper } from './styles';

const buttonLabels = ['Agências', 'Chatbot', 'Marketing Digital', 'Geração de Leads', 'Mídia Paga'];

const VideoGallery = () => {
  return (
    <Container>
      <Flex>
        <List row gap>
          {buttonLabels.map((label) => (
            <ListItem key={label}>
              <ButtonSecondary>{label}</ButtonSecondary>
            </ListItem>
          ))}
        </List>
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
