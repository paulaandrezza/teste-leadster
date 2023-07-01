'use client';

import { Column, Container, DividerX, Flex, Row, Text } from '@/app/theme/shared';
import logo from '@public/logo.png';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Label, Link, List, ListItem, SocialBubble, Wrapper } from './styles';

const footerLinks = [
  {
    category: 'Links Principais',
    links: [
      { name: 'Home', url: 'https://leadster.com.br/' },
      { name: 'Ferramenta', url: 'https://leadster.com.br/contato/' },
      { name: 'Preços', url: 'https://leadster.com.br/preco/' },
      { name: 'Contato', url: 'https://leadster.com.br/contato/' },
    ],
  },
  {
    category: 'Cases',
    links: [
      { name: 'Geração de Leads B2B', url: 'https://leadster.com.br/geracao-de-leads/b2b/' },
      {
        name: 'Geração de Leads em Software',
        url: 'https://leadster.com.br/geracao-de-leads/software/',
      },
      {
        name: 'Geração de Leads em Imobiliária',
        url: 'https://leadster.com.br/geracao-de-leads/imobiliaria/',
      },
      { name: 'Cases de Sucesso', url: 'https://leadster.com.br/estudo-de-caso/' },
    ],
  },
  {
    category: 'Materiais',
    links: [
      { name: 'Blog', url: 'https://leadster.com.br/blog/' },
      { name: 'Parceria com Agências', url: 'https://leadster.com.br/geracao-de-leads/agencias/' },
      {
        name: 'Guia Definitivo do Marketing',
        url: 'https://leadster.com.br/marketing-conversacional/',
      },
      { name: 'Materias Gratuitos', url: 'https://leadster.com.br/materiais/' },
    ],
  },
];

const Footer = () => {
  return (
    <Container>
      <Column gap>
        <Wrapper>
          <Image src={logo} alt="leadster-logo"></Image>
          <Text fontSize="small">Transformando visitantes em clientes.</Text>
        </Wrapper>
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
        <DividerX />
        <Flex>
          <Text textColor="secondary" fontSize="small">
            Copyright © 2015 - 2022 Todos os direitos reservados | Leadster
          </Text>
          <Text textColor="secondary" fontSize="small">
            Rua José Lourenço, 464 - Centro - Curitiba PR - CEP: 80010-000 | Termos de Uso
          </Text>
        </Flex>
      </Column>
    </Container>
  );
};

export default Footer;
