import React, { ReactNode } from 'react';

interface ControlButtonProps {
  icon: ReactNode;
  label: string;
  variant: 'success' | 'warning' | 'danger';
  onClick: () => void;
  active: boolean;
}

const variantStyles = {
  success: {
    active: 'bg-green-600 text-white',
    inactive: 'bg-green-100 text-green-700 hover:bg-green-200',
  },
  warning: {
    active: 'bg-yellow-600 text-white',
    inactive: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200',
  },
  danger: {
    active: 'bg-red-600 text-white',
    inactive: 'bg-red-100 text-red-700 hover:bg-red-200',
  },
};

export const ControlButton: React.FC<ControlButtonProps> = ({
  icon,
  label,
  variant,
  onClick,
  active,
}) => {
  const styles = variantStyles[variant];
  const className = active ? styles.active : styles.inactive;

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center p-2 rounded-md transition-colors duration-200 ${className}`}
    >
      {icon}
      {label && <span className="ml-2">{label}</span>}
    </button>
  );
};