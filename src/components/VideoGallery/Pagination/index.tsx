'use client';

import { Container, Row, Text } from '@/app/theme/shared';
import { NumberPage } from './styles';

interface Props {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number | null>>;
  videoCount: number;
}

const Pagination = ({ page, setPage, videoCount }: Props) => {
  return (
    <Container>
      <Row>
        <Text fontWeight="bold">Página</Text>
        {Array.from({ length: Math.ceil(videoCount / 9) }, (_, index) => (
          <NumberPage
            className={page === index ? 'selected' : ''}
            key={index}
            onClick={() => setPage(index)}
          >
            {index + 1}
          </NumberPage>
        ))}
      </Row>
    </Container>
  );
};

export default Pagination;
