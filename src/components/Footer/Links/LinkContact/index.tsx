'use client';

import { Column, Row, Text } from '@/app/theme/shared';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Wrapper } from '../../styles';
import { Link } from '../styles';
import { Label, SocialBubble } from './styles';

const LinkContact = () => {
  return (
    <Column $gap $gapMQ $align="left">
      <Text fontWeight="bold">Siga a Leadster</Text>
      <Wrapper $gap>
        <Row>
          <SocialBubble
            href="https://www.linkedin.com/company/getleadster/"
            target="_blank"
            aria-label="LinkedIn da Leadster"
          >
            <FaLinkedinIn />
          </SocialBubble>
          <SocialBubble
            href="https://www.facebook.com/leadsterplatform/"
            target="_blank"
            aria-label="Facebook da Leadster"
          >
            <FaFacebookF />
          </SocialBubble>
          <SocialBubble
            href="https://www.instagram.com/leadster.com.br/"
            target="_blank"
            aria-label="Instagram da Leadster"
          >
            <FaInstagram />
          </SocialBubble>
        </Row>
        <Wrapper>
          <Text $textColor="secondary">
            <Label>E-mail: </Label>
            <Link href="mailto:contato@leadster.com.br">contato@leadster.com.br</Link>
          </Text>
          <Text $textColor="secondary">
            <Label>Telefone: </Label>
            <Link href="tel:+5542988289851">(42) 98828-9851</Link>
          </Text>
        </Wrapper>
      </Wrapper>
    </Column>
  );
};

export default LinkContact;
