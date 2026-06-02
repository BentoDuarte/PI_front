import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Sidebar = styled.aside`
  width: 72px;
  min-height: 96svh;
  background: linear-gradient(180deg, #3b2f7a 0%, #2b2360 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 10px;
  gap: 14px;
  position: fixed;
  top: 0;
  left: 0;`;

export const ToggleButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: transform 0.15s ease, background 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.16);
  }
`;

export const NavList = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const NavButton = styled(NavLink)`
  width: 44px;
  height: 44px;
  border-radius: 14px;
  border: 1px solid transparent;
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: transform 0.15s ease, background 0.15s ease, box-shadow 0.15s ease;
  text-decoration: none;
  position: relative;

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.16);
  }

  &.active {
    background: #5a4be7;
    box-shadow: 0 6px 14px rgba(28, 18, 76, 0.35);
  }

  &.active::after {
    content: '';
    position: absolute;
    right: -6px;
    top: 50%;
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: #5a4be7;
    box-shadow: 0 0 0 4px rgba(90, 75, 231, 0.2);
    transform: translateY(-50%);
  }

  ${props =>
    props.$disabled &&
    `
      opacity: 0.55;
      cursor: not-allowed;
      &:hover {
        transform: none;
        background: rgba(255, 255, 255, 0.08);
      }
    `}
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const HelperText = styled.span`
  font-size: 11px;
  line-height: 1;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
`;

export const LogoutButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: transform 0.15s ease, background 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.16);
    box-shadow: 0 6px 14px rgba(28, 18, 76, 0.2);
  }
`;
