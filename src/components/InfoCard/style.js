import styled from 'styled-components';

export const Card = styled.div`
  min-width: 150px;
  height: 120px;
  background: ${props => props.$cardBg || '#ffffff'};
  border-radius: 12px;
  padding: 12px 16px;
  box-shadow: 0 6px 18px rgba(25, 23, 54, 0.08);
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const CardIcon = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 10px;
  border: 1px solid ${props => props.$iconBorderColor || '#e7e2f2'};
  color: ${props => props.$iconColor || '#4b3b9d'};
  display: grid;
  place-items: center;
  background: ${props => props.$iconBg || '#f7f5ff'};
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const CardTitle = styled.span`
  color: ${props => props.$titleColor || '#7a7198'};
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.4px;
`;

export const CardValue = styled.span`
  color: ${props => props.$valueColor || '#221b4f'};
  font-size: 24px;
  font-weight: 600;
`;
