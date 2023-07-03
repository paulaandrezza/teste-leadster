'use client';

import { FlexSB, Text } from '@/app/theme/shared';
import { Anchor } from './styles';

const FooterInfo = () => {
  return (
    <FlexSB>
      <Text $textColor="secondary" fontSize="small">
        Copyright © 2015 - 2022 Todos os direitos reservados |{' '}
        <Anchor href="https://leadster.com.br/" target="_blank">
          Leadster
        </Anchor>
      </Text>
      <Text $textColor="secondary" fontSize="small">
        Rua José Lourenço, 464 - Centro - Curitiba PR - CEP: 80010-000 |{' '}
        <Anchor href="https://leadster.com.br/termos_de_uso/" target="_blank">
          Termos de Uso
        </Anchor>
      </Text>
    </FlexSB>
  );
};

export default FooterInfo;
