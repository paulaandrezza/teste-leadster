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

export const SocialBubble = styled.a`
  background: ${theme.colors.bubble};
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: ${theme.colors['text-secondary']};

  &:hover {
    background: ${theme.colors['blue-primary']};
    color: ${theme.colors['bg-primary']};
  }
`;

export const Label = styled.span`
  color: ${theme.colors['text-primary']};
`;
