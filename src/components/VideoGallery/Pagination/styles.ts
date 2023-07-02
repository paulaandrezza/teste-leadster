import { theme } from '@/app/theme/theme';
import styled from 'styled-components';

export const NumberPage = styled.button`
  background-color: ${theme.colors['bg-primary']};
  color: ${theme.colors['text-primary']};
  padding: 4px 8px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 500;
  border-radius: 8px;
  border: 1px solid ${theme.colors['text-primary']};
  font-size: ${theme.fontSizes.normal};

  cursor: pointer;

  &:hover,
  &:focus {
    border-color: ${theme.colors['blue-primary']};
    color: ${theme.colors['blue-primary']};
  }

  &:active,
  &.selected {
    background-color: ${theme.colors['blue-primary']};
    color: ${theme.colors['bg-primary']};
    border: 1px ${theme.colors['blue-primary']} solid;
  }
`;
