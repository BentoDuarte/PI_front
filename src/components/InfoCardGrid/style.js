import styled from 'styled-components';

export const Grid = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${props => props.$minWidth}px, 1fr));
  gap: ${props => props.$gap}px;
`;
