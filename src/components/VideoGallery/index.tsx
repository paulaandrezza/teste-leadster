'use client';

import { Container, Flex, List, ListItem, Text } from '@/app/theme/shared';
import { ButtonSecondary, Select, Wrapper } from './styles';

const buttonLabels = ['Agências', 'Chatbot', 'Marketing Digital', 'Geração de Leads', 'Mídia Paga'];

const VideoGallery = () => {
  return (
    <Container>
      <Flex>
        <List row gap>
          {buttonLabels.map((label) => (
            <ListItem key={label}>
              <ButtonSecondary>
                <Text>{label}</Text>
              </ButtonSecondary>
            </ListItem>
          ))}
        </List>
        <Wrapper>
          <label htmlFor="orderBy">
            <Text>Ordenador por</Text>
          </label>
          <Select name="orderBy" id="orderBy">
            <option value="Data de publicação">Data de publicação</option>
          </Select>
        </Wrapper>
      </Flex>
    </Container>
  );
};

export default VideoGallery;
