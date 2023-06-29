'use client';

import { Bold, Container, DividerX, Subtitle, Text } from '@/app/theme/shared';
import { Tag, Title, Wrapper } from './styles';

const Hero = () => {
  return (
    <Container color="secondary">
      <Wrapper>
        <Tag>WEBINARS EXCLUSIVOS</Tag>
        <Subtitle>Menos Conversinha,</Subtitle>
        <Title>Mais Conversão</Title>
        <DividerX />
        <Text>
          Conheça as estratégias que <Bold>mudaram o jogo</Bold> e como aplicá-las no seu négocio
        </Text>
      </Wrapper>
    </Container>
  );
};

export default Hero;
