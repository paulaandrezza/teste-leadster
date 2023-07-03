import { theme } from '@/app/theme/theme';
import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background-color: ${theme.colors['bg-primary']};
  max-width: 500px;
  border-radius: 8px;
  border-top: 4px solid ${theme.colors['blue-secondary']};
`;

export const MiniModalContent = styled.div`
  background-color: ${theme.colors['bg-primary']};
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 8px;
  font-size: 18px;
  cursor: pointer;
  color: ${theme.colors['text-secondary']};

  &:hover {
    color: #000;
  }
`;

export const DivButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const BoxTitle = styled.div`
  width: 60%;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 20px;
`;

export const BlueText = styled.span`
  color: ${theme.colors['blue-secondary']};
`;

export const Content = styled.div`
  margin: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ContentChild = styled.div``;

export const RowButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

interface DownloadButtonProps {
  color: string;
  bg1: string;
  bg2: string;
}

export const DownloadButton = styled.button<DownloadButtonProps>`
  color: ${(props) => (props.color ? props.color : '#00AE7F')};
  background: ${(props) => (props.bg2 ? props.bg2 : '#9FEFDF')};
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;

  cursor: pointer;

  & > * {
    padding: 8px;
  }

  & > :first-child {
    background: ${(props) => (props.bg1 ? `${props.bg1}` : '#C2F4EA')};
    border-radius: 8px 0 0 8px;
    height: 100%;
    width: 100%;
  }
`;
