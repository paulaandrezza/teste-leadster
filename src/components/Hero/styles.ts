import { theme } from '@/app/theme/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Tag = styled.p`
  color: ${theme.colors['blue-secondary']};
  font-weight: bold;
  padding: 8px 32px;
  border: 4px solid ${theme.colors['blue-secondary']};
  border-radius: 24px 24px 24px 4px;
  margin-bottom: 32px;
`;

export const Title = styled.h2`
  color: ${theme.colors['blue-primary']};
  font-size: 72px;
  font-weight: bold;
`;
