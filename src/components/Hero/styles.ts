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
  border: 4px solid ${theme.colors['blue-secondary']};
  border-radius: 24px 24px 24px 4px;
  margin-bottom: 32px;
`;

export const Title = styled.h1`
  color: ${theme.colors['blue-primary']};
  font-size: ${theme.fontSizes.subtitle};
  font-weight: 900;
  text-align: center;

  @media (min-width: 768px) {
    font-size: ${theme.fontSizes.title};
  }
`;

export const Subtitle = styled.h2`
  color: ${theme.colors['text-primary']};
  font-size: ${theme.fontSizes.heading};
  font-weight: 900;
  text-align: center;

  @media (min-width: 768px) {
    font-size: ${theme.fontSizes.subtitle};
  }
`;
