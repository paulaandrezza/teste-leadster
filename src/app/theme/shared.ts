import styled from 'styled-components';
import { theme } from './theme';

interface ContainerProps {
  color?: string;
}

export const Container = styled.div<ContainerProps>`
  width: 100vw;
  padding: 40px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) =>
    color == 'secondary' ? theme.colors['bg-secondary'] : theme.colors['bg-primary']};

  @media (min-width: 768px) {
    padding: 40px 100px;
  }

  @media (min-width: 1024px) {
    padding: 40px 200px;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 64px;

    > * {
      flex-basis: 70%;
    }
  }
`;

interface ColumnProps {
  align?: string;
}

export const Column = styled.div<ColumnProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.align == 'left' ? 'flex-start' : 'center')};
  justify-content: center;
`;

interface RowProps {
  align?: string;
}

export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => (props.align == 'end' ? 'flex-end' : 'center')};
  justify-content: center;
  gap: 16px;
`;

export const DividerX = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${theme.colors.divider};
  margin: 12px 0;
`;

export const DividerY = styled.div`
  height: 16px;
  width: 1.5px;
  background-color: ${theme.colors['text-primary']};
`;

interface TextProps {
  text?: string;
  fontSize?: keyof typeof theme.fontSizes;
  fontWeight?: keyof typeof theme.fontWeights;
}

export const Text = styled.p<TextProps>`
  color: ${(props) =>
    props.text == 'secondary' ? theme.colors['text-secondary'] : theme.colors['text-primary']};
  font-size: ${(props) =>
    props.fontSize ? theme.fontSizes[props.fontSize] : theme.fontSizes.normal};
  font-weight: ${(props) =>
    props.fontWeight ? theme.fontWeights[props.fontWeight] : theme.fontWeights.normal};
  margin-top: 8px;
`;

export const Bold = styled.span`
  font-weight: 800;
`;

export const Button = styled.button`
  background-color: ${theme.colors['blue-primary']};
  color: ${theme.colors['bg-primary']};
  padding: 16px 24px;
  font-weight: 500;
  border-radius: 24px;
  border: none;
  white-space: nowrap;

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${theme.colors['button-hover']};
  }

  &:active {
    background-color: ${theme.colors['button-active']};
  }
`;
