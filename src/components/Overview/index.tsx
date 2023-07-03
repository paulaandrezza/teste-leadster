'use client';

import {
  Bold,
  Button,
  Column,
  Container,
  DividerX,
  DividerY,
  Flex,
  Row,
  Text,
} from '@/app/theme/shared';
import comparativo from '@public/comparativo_img_CTA.png';
import card from '@public/no-card-dark.webp';
import rating from '@public/rating.webp';
import selo from '@public/selo_RD.png';
import { Variants, motion } from 'framer-motion';
import Image from 'next/image';
import { FlexInfo, IconText } from './styles';

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

const Overview = () => {
  return (
    <Container
      as={motion.div}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      color="secondary"
    >
      <Flex as={motion.div} variants={cardVariants} $noWrap>
        <Image src={comparativo} alt="gráfico" layout="responsive" />
        <Column $align={'left'} $wrap>
          <Text fontSize="subtitle">
            Pronto para triplicar sua <Bold>Geração de leads?</Bold>
          </Text>
          <Text fontWeight={'subtitle'}>
            Criação e ativação em <Bold>4 minutos.</Bold>
          </Text>
          <DividerX />
          <Row>
            <Button>VER DEMONSTRAÇÃO</Button>
            <Image src={selo} alt="Top 10 - Apps mais Usados | RD Station" height="50" />
          </Row>
          <FlexInfo>
            <IconText>
              <Image src={card} alt="Ícone de cartão não necessário" />
              <Text>
                <Bold>Não</Bold> é necessário Cartão de Crédito
              </Text>
            </IconText>
            <DividerY />
            <IconText>
              <Image src={rating} alt="4.9/5 estrelas" />
              <Text>
                <Bold>4.9/5</Bold> média de satisfação
              </Text>
            </IconText>
          </FlexInfo>
        </Column>
      </Flex>
    </Container>
  );
};

export default Overview;
