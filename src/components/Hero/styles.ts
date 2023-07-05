import { theme } from '@/app/theme/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    padding: 100px 0;
  }
`;

export const Tag = styled.p`
  color: ${theme.colors['blue-secondary']};
  font-weight: bold;
  padding: 8px 32px;
  border: 3px solid ${theme.colors['blue-secondary']};
  border-radius: 24px 24px 24px 4px;
  margin-bottom: 32px;
`;

import assetHeader from '@public/asset-header.svg';

export const Title = styled.h1`
  color: ${theme.colors['blue-primary']};
  font-size: ${theme.fontSizes.subtitle};
  font-weight: 900;
  text-align: center;

  @media (min-width: 768px) {
    font-size: ${theme.fontSizes.title};
  }

  & > span {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      z-index: 100;
      top: 16px;
      right: -8px;
      width: 32px;
      height: 100%;
      background-image: url(${assetHeader.src});
      background-size: contain;
      background-repeat: no-repeat;

      @media (max-width: 768px) {
        top: 8px;
        right: -8px;
        width: 22px;
      }

      @media (max-width: 425px) {
        display: none;
      }
    }
  }
`;
