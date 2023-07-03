'use client';

import { Container } from '@/app/theme/shared';
import logo from '@public/logo.svg';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Header = () => {
  return (
    <Container>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 100,
        }}
      >
        <Image src={logo} alt="leadster-logo" width={200}></Image>
      </motion.div>
    </Container>
  );
};

export default Header;
