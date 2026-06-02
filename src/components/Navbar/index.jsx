import React from 'react';
import { FiMenu, FiHome, FiClipboard, FiUsers, FiShoppingCart, FiSettings, FiLogOut } from 'react-icons/fi';
import { HelperText, NavButton, NavList, Sidebar, Spacer, ToggleButton, LogoutButton } from './style';

const items = [
  { id: 'os', label: 'Ordem', icon: FiClipboard, to: '/ordem-servico' },
  { id: 'home', label: 'Home', icon: FiHome, to: '#' },
  { id: 'users', label: 'Clientes', icon: FiUsers, to: '#' },
  { id: 'orders', label: 'Pedidos', icon: FiShoppingCart, to: '#' },
  { id: 'settings', label: 'Config', icon: FiSettings, to: '#' },
];

export default function Navbar() {
  return (
    <Sidebar aria-label="Barra de navegacao">
      <ToggleButton type="button" aria-label="Abrir menu">
        <FiMenu size={20} />
      </ToggleButton>
      <NavList>
        {items.map(item => {
          const Icon = item.icon;
          return (
            <NavButton
              key={item.id}
              to={item.to}
              end={item.to === '/ordem-servico'}
              className={({ isActive }) => (isActive && item.to !== '#' ? 'active' : '')}
              $disabled={item.to === '#'}
              aria-label={item.label}
              title={item.label}
              onClick={event => {
                if (item.to === '#') {
                  event.preventDefault();
                }
              }}
            >
              <Icon size={20} />
            </NavButton>
          );
        })}
      </NavList>
      <Spacer />
      <LogoutButton type="button" aria-label="Sair do sistema" title="Sair">
        <FiLogOut size={18} />
      </LogoutButton>
      <HelperText>PI</HelperText>
    </Sidebar>
  );
}
