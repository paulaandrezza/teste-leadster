'use client';

import { cardVariants } from '@/animations/animations';
import { Bold, Container, DividerX, Text } from '@/app/theme/shared';
import { motion } from 'framer-motion';
import { Subtitle, Tag, Title, Wrapper } from './styles';

const Hero = () => {
  return (
    <Container
      as={motion.div}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      $color="secondary"
    >
      <Wrapper as={motion.div} variants={cardVariants}>
        <Tag>WEBINARS EXCLUSIVOS</Tag>
        <Subtitle>Menos Conversinha,</Subtitle>
        <Title>Mais Conversão</Title>
        <DividerX />
        <Text fontWeight={'subtitle'} $textAlign="center">
          Conheça as estratégias que <Bold>mudaram o jogo</Bold> e como aplicá-las no seu négocio
        </Text>
      </Wrapper>
    </Container>
  );
};

export default Hero;
