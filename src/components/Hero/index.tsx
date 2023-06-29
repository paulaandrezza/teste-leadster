'use client';

import { Container, Divider, Text, Textbold } from '@/app/theme/shared';
import { Subtitle, Tag, Title, Wrapper } from './styles';

const Hero = () => {
  return (
    <Container color="secondary">
      <Wrapper>
        <Tag>WEBINARS EXCLUSIVOS</Tag>
        <Subtitle>Menos Conversinha,</Subtitle>
        <Title>Mais Conversão</Title>
        <Divider />
        <Text>
          Conheça as estratégias que <Textbold>mudaram o jogo</Textbold> e como aplicá-las no seu
          négocio
        </Text>
      </Wrapper>
    </Container>
  );
};

export default Hero;
