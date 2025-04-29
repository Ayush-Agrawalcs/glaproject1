import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`relative py-2 font-medium transition-colors ${
        isActive 
          ? 'text-primary-500' 
          : 'text-gray-700 hover:text-primary-500'
      }`}
    >
      {children}
      <span 
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 transform origin-left transition-transform duration-300 ${
          isActive ? 'scale-x-100' : 'scale-x-0'
        }`} 
      />
    </Link>
  );
};

export default NavLink;