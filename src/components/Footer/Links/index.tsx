'use client';

import { Flex } from '@/app/theme/shared';
import LinkContact from './LinkContact';
import LinkItem from './LinkItem';
import { footerLinks } from './footerLinks';

const Links = () => {
  return (
    <Flex $align="top">
      {footerLinks.map((item, index) => (
        <LinkItem key={index} item={item} />
      ))}
      <LinkContact />
    </Flex>
  );
};

export default Links;
