import React from 'react';
import { Bell, Settings, Brain } from 'lucide-react';
import { UserProfileMenu } from '../profile/UserProfileMenu';
import { SystemSelector } from './SystemSelector';
import { NavigationItems } from './NavigationItems';
import SystemControl from '../dashboard/SystemControl';
import { NavbarBrand } from './NavbarBrand';
import { NavbarActions } from './NavbarActions';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Row */}
        <div className="flex justify-between h-16">
          <NavbarBrand />
          <NavbarActions />
        </div>

        {/* Second Row */}
        <div className="flex items-center justify-between pb-4">
          <NavigationItems />
          <div className="flex items-center space-x-4">
            <SystemSelector />
            <SystemControl />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;