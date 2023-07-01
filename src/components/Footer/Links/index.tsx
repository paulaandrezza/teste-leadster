'use client';

import { Column, Flex, Row, Text } from '@/app/theme/shared';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Wrapper } from '../styles';
import { footerLinks } from './footerLinks';
import { Label, Link, List, ListItem, SocialBubble } from './styles';

const Links = () => {
  return (
    <Flex align="top">
      {footerLinks.map((item, index) => (
        <Column key={index} gap align="left">
          <Text fontWeight="bold">{item.category}</Text>
          <List>
            {item.links.map((link) => (
              <ListItem key={link.name}>
                <Link href={link.url} target="_blank">
                  <Text textColor="secondary">{link.name}</Text>
                </Link>
              </ListItem>
            ))}
          </List>
        </Column>
      ))}
      <Column gap align="left">
        <Text fontWeight="bold">Siga a Leadster</Text>
        <Wrapper gap>
          <Row>
            <SocialBubble href="https://www.linkedin.com/company/getleadster/" target="_blank">
              <FaLinkedinIn color="#808080" />
            </SocialBubble>
            <SocialBubble href="https://www.facebook.com/leadsterplatform/" target="_blank">
              <FaFacebookF color="#808080" />
            </SocialBubble>
            <SocialBubble href="https://www.instagram.com/leadster.com.br/" target="_blank">
              <FaInstagram color="#808080" />
            </SocialBubble>
          </Row>
          <Wrapper>
            <Text textColor="secondary">
              <Label>E-mail: </Label>
              <Link href="mailto:contato@leadster.com.br">contato@leadster.com.br</Link>
            </Text>
            <Text textColor="secondary">
              <Label>Telefone: </Label>
              <Link href="tel:+5542988289851">(42) 98828-9851</Link>
            </Text>
          </Wrapper>
        </Wrapper>
      </Column>
    </Flex>
  );
};

export default Links;
