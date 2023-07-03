'use client';

import { Column, Container, DividerX, Text } from '@/app/theme/shared';
import logo from '@public/logo.svg';
import Image from 'next/image';
import FooterInfo from './FooterInfo';
import Links from './Links';
import { Wrapper } from './styles';

const Footer = () => {
  return (
    <Container>
      <Column $gap $wrap>
        <Wrapper>
          <Image src={logo} alt="leadster-logo" width={200}></Image>
          <Text fontSize="small">Transformando visitantes em clientes.</Text>
        </Wrapper>
        <Links />
        <DividerX />
        <FooterInfo />
      </Column>
    </Container>
  );
};

export default Footer;
