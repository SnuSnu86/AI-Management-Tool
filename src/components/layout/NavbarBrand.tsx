import React from 'react';
import { Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NavbarBrand = () => {
  return (
    <Link to="/" className="flex items-center">
      <Brain className="h-8 w-8 text-indigo-600" />
      <span className="ml-2 text-xl font-semibold">Your AI-Manager</span>
    </Link>
  );
};