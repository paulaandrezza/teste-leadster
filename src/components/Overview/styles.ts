import styled from 'styled-components';

export const IconText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  gap: 4px;
  white-space: nowrap;
`;

export const FlexInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 8px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 16px;
    width: 100%;
  }
`;
