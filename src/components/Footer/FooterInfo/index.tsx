'use client';

import { FlexSB, Text } from '@/app/theme/shared';

const FooterInfo = () => {
  return (
    <FlexSB>
      <Text $textColor="secondary" fontSize="small">
        Copyright © 2015 - 2022 Todos os direitos reservados | Leadster
      </Text>
      <Text $textColor="secondary" fontSize="small">
        Rua José Lourenço, 464 - Centro - Curitiba PR - CEP: 80010-000 | Termos de Uso
      </Text>
    </FlexSB>
  );
};

export default FooterInfo;
