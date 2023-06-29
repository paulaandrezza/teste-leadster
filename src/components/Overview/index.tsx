'use client';

import {
  Bold,
  Button,
  Column,
  Container,
  DividerX,
  DividerY,
  Flex,
  Label,
  Row,
  Subtitle,
  Text,
} from '@/app/theme/shared';
import comparativo from '@public/comparativo_img_CTA.png';
import card from '@public/no-card-dark.webp';
import rating from '@public/rating.webp';
import selo from '@public/selo_RD.png';
import Image from 'next/image';
import { IconText } from './styles';

const Overview = () => {
  return (
    <Container color="secondary">
      <Flex>
        <Image src={comparativo} alt="gráfico" layout="responsive" />
        <Column align={'left'}>
          <Subtitle>
            Pronto para triplicar sua <Bold>Geração de leads?</Bold>
          </Subtitle>
          <Text>
            Criação e ativação em <Bold>4 minutos.</Bold>
          </Text>
          <DividerX />
          <Row>
            <Button>VER DEMONSTRAÇÃO</Button>
            <Image src={selo} alt="Top 10 - Apps mais Usados | RD Station" layout="responsive" />
          </Row>
          <Row align="end">
            <IconText>
              <Image src={card} alt="Ícone de cartão não necessário" />
              <Label>
                <Bold>Não</Bold> é necessário Cartão de Crédito
              </Label>
            </IconText>
            <DividerY />
            <IconText>
              <Image src={rating} alt="4.9/5 estrelas" />
              <Label>
                <Bold>4.9/5</Bold> média de satisfação
              </Label>
            </IconText>
          </Row>
        </Column>
      </Flex>
    </Container>
  );
};

export default Overview;
