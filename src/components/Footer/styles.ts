import { theme } from '@/app/theme/theme';
import styled from 'styled-components';

export const Link = styled.a`
  white-space: nowrap;
`;

export const SocialBubble = styled.a`
  background: ${theme.colors.bubble};
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const Label = styled.span`
  color: ${theme.colors['text-primary']};
`;

interface WrapperProps {
  $gap?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${(props) => props.$gap && '32px'};
`;
