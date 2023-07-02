'use client';

import { Container, Row, Text } from '@/app/theme/shared';
import { NumberPage } from './styles';

interface Props {
  page: number | null;
  setPage: React.Dispatch<React.SetStateAction<number | null>>;
}

const Pagination = ({ page, setPage }: Props) => {
  function selectPage(option) {
    return setPage(option);
  }

  return (
    <Container>
      <Row>
        <Text fontWeight="bold">Página</Text>

        <NumberPage>1</NumberPage>
        <NumberPage>2</NumberPage>
      </Row>
    </Container>
  );
};

export default Pagination;
