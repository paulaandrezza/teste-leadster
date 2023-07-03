'use client';

import { Bold, Container, DividerX, Text } from '@/app/theme/shared';
import { Tag, Title, Wrapper } from './styles';

const Hero = () => {
  return (
    <Container color="secondary">
      <Wrapper>
        <Tag>WEBINARS EXCLUSIVOS</Tag>
        <Text fontSize="subtitle">Menos Conversinha,</Text>
        <Title>Mais Conversão</Title>
        <DividerX />
        <Text fontWeight={'subtitle'}>
          Conheça as estratégias que <Bold>mudaram o jogo</Bold> e como aplicá-las no seu négocio
        </Text>
      </Wrapper>
    </Container>
  );
};

export default Hero;
