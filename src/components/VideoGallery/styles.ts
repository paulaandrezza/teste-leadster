import { theme } from '@/app/theme/theme';
import styled from 'styled-components';

export const ButtonSecondary = styled.button`
  background-color: ${theme.colors['bg-primary']};
  color: ${theme.colors['text-primary']};
  padding: 8px 16px;
  font-weight: 500;
  border-radius: 24px;
  border: 1px ${theme.colors['text-primary']} solid;
  white-space: nowrap;
  font-size: ${theme.fontSizes.normal};

  cursor: pointer;

  &:hover,
  &:focus {
    border: 1px ${theme.colors['blue-primary']} solid;
    color: ${theme.colors['blue-primary']};
  }

  &:active {
    background-color: ${theme.colors['blue-primary']};
    color: ${theme.colors['bg-primary']};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const Select = styled.select`
  background-color: ${theme.colors['bg-primary']};
  color: ${theme.colors['text-primary']};
  padding: 8px 16px;
  font-weight: 500;
  border-radius: 8px;
  border: 1px solid ${theme.colors['text-primary']};
  white-space: nowrap;
  font-size: ${theme.fontSizes.normal};

  cursor: pointer;

  &:hover,
  &:focus {
    border-color: ${theme.colors['blue-primary']};
    color: ${theme.colors['blue-primary']};
  }

  &:active {
    background-color: ${theme.colors['blue-primary']};
  }
`;
