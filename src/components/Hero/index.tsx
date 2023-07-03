'use client';

import { Bold, Container, DividerX, Text } from '@/app/theme/shared';
import { Variants, motion } from 'framer-motion';
import { Tag, Title, Wrapper } from './styles';

const cardVariants: Variants = {
  offscreen: {
    y: 50,
  },
  onscreen: {
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const Hero = () => {
  return (
    <Container
      as={motion.div}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      color="secondary"
    >
      <Wrapper as={motion.div} variants={cardVariants}>
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
