import { theme } from '@/app/theme/theme';
import styled from 'styled-components';

export const Link = styled.a`
  white-space: nowrap;

  color: ${theme.colors['text-secondary']};
  font-size: ${theme.fontSizes.normal};
  font-weight: ${theme.fontWeights.normal};

  &:hover {
    color: ${theme.colors['blue-primary']};
  }
`;
