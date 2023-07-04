'use client';

import { Column, List, ListItem, Text } from '@/app/theme/shared';
import { footerLinks } from '../footerLinks';
import { Link } from '../styles';

interface Props {
  item: (typeof footerLinks)[0];
}

const LinkItem = ({ item }: Props) => {
  return (
    <Column $gap $gapMQ $align="left">
      <Text fontWeight="bold">{item.category}</Text>
      <List $align="start">
        {item.links.map((link) => (
          <ListItem key={link.name}>
            <Link href={link.url} target="_blank">
              {link.name}
            </Link>
          </ListItem>
        ))}
      </List>
    </Column>
  );
};

export default LinkItem;
