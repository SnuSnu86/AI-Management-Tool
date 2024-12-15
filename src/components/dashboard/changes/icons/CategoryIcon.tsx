import React from 'react';
import { Settings, Database, Globe, Bell, Shield, BookOpen, Filter } from 'lucide-react';
import { ChangeCategory } from '../../../../types/changes';

interface CategoryIconProps {
  category: ChangeCategory;
  component: string;
  className?: string;
}

export const CategoryIcon: React.FC<CategoryIconProps> = ({ category, component, className = "h-4 w-4" }) => {
  switch (`${category}.${component}`) {
    case 'settings.language':
      return <Globe className={`${className} text-green-500`} />;
    case 'settings.notifications':
      return <Bell className={`${className} text-blue-500`} />;
    case 'settings.security':
      return <Shield className={`${className} text-red-500`} />;
    case 'data.vocabulary':
      return <BookOpen className={`${className} text-purple-500`} />;
    case 'data.filterWords':
      return <Filter className={`${className} text-orange-500`} />;
    default:
      return category === 'settings' 
        ? <Settings className={`${className} text-gray-500`} />
        : <Database className={`${className} text-gray-500`} />;
  }
};