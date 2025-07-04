import React from 'react';

const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = () => {
  return (
    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22.5" cy="22.5" r="22.5" fill="#ECF0F4"/>
      <path d="M16 28H26" stroke="#181C2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16 22H32" stroke="#181C2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16 16H22" stroke="#181C2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};

export default MenuIcon;
