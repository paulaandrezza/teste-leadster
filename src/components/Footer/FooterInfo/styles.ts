import { styled } from 'styled-components';

export const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
