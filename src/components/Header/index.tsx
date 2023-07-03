'use client';

import { Container } from '@/app/theme/shared';
import logo from '@public/logo.png';
import Image from 'next/image';

const Header = () => {
  return (
    <Container>
      <Image src={logo} alt="leadster-logo"></Image>
    </Container>
  );
};

export default Header;
