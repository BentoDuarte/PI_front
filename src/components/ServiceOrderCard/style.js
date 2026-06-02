import styled from 'styled-components';

export const Card = styled.div`
  background: #ffffff;
  border-radius: 14px;
  padding: 18px 20px;
  box-shadow: 0 8px 20px rgba(18, 20, 43, 0.08);
  display: grid;
  gap: 12px;
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`;

export const Title = styled.h3`
  margin: 0;
  color: #1f1a3d;
  font-size: 18px;
  font-weight: 600;
`;

export const Subtitle = styled.p`
  margin: 4px 0 0;
  color: #7a7198;
  font-size: 13px;
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;

  button {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    border: 1px solid #efeaf7;
    background: #ffffff;
    color: #5a4be7;
    display: grid;
    place-items: center;
    cursor: pointer;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }

  button:last-child {
    color: #dc2626;
  }

  button:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 12px rgba(18, 20, 43, 0.12);
  }
`;

export const InfoBlock = styled.div`
  display: grid;
  gap: 4px;
`;

export const Label = styled.span`
  color: #8a829f;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.4px;
`;

export const Value = styled.span`
  color: #221b4f;
  font-size: 14px;
  font-weight: 500;
`;

export const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding-top: 6px;
  border-top: 1px solid #efeaf7;
  position: relative;

  svg {
    position: absolute;
    right: 12px;
    color: #5a4be7;
    pointer-events: none;
  }
`;

export const StatusSelect = styled.select`
  margin-left: auto;
  appearance: none;
  border: none;
  background: #eaf1ff;
  color: #1d4ed8;
  font-weight: 600;
  padding: 6px 32px 6px 14px;
  border-radius: 999px;
  cursor: pointer;
`;
