import styled from 'styled-components';
import { theme } from './theme';

export const Container = styled.div`
  width: 100vw;
  padding: 40px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) =>
    color == 'secondary' ? theme.colors['bg-secondary'] : theme.colors['bg-primary']};
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${theme.colors.divider};
  margin: 16px 0;
`;

export const Text = styled.p`
  color: ${theme.colors['text-primary']};
  font-size: 16px;
  font-weight: 600;
`;

export const Textbold = styled.p`
  display: inline;
  color: ${theme.colors['text-primary']};
  font-size: 16px;
  font-weight: 800;
`;
