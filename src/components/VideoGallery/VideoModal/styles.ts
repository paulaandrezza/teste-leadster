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
  background-color: #fff;
  padding: 20px;
  border-radius: 16px;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
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
