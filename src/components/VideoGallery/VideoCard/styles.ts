import Image from 'next/image';
import styled from 'styled-components';

export const Box = styled.div`
  box-sizing: border-box;
  border-radius: 16px;
  box-shadow: 0 4px 32px #00000050;
  display: grid;
  grid-template-columns: fit-content(0);
  grid-template-row: 1fr 1fr;
  cursor: pointer;
`;

export const BoxImage = styled(Image)`
  background-size: cover;
  width: 400px;
  height: 100%;
  border-radius: 16px 16px 0 0;
`;

export const CardContent = styled.div`
  padding: 20px;
  width: 100%;
`;
