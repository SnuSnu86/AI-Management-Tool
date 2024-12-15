import React, { ReactNode } from 'react';
import { classNames } from '../../../utils/classNames';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  error?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  icon,
  error,
  className,
  ...props
}) => {
  return (
    <div>
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-400 h-5 w-5">{icon}</span>
          </div>
        )}
        <input
          className={classNames(
            "appearance-none relative block w-full px-3 py-2 border",
            error ? "border-red-300" : "border-gray-300",
            "placeholder-gray-500 text-gray-900 rounded-md",
            "focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
            "focus:z-10 sm:text-sm",
            icon ? "pl-10" : "pl-3",
            className || ""
          )}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};