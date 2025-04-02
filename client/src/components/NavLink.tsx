import React from 'react';

interface NavLinkProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({ onClick, children }) => (
  <button onClick={onClick} className="hover:text-purple-300 transition-colors duration-200">
    {children}
  </button>
);
