import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useSystem } from '../../context/SystemContext';

export const SystemSelector = () => {
  const { currentSystem, systems, setCurrentSystem } = useSystem();
  const [isOpen, setIsOpen] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'training': return 'bg-yellow-500';
      case 'stopped': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="relative ml-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
      >
        <span className="mr-2">{currentSystem.name}</span>
        <span className={`h-2.5 w-2.5 rounded-full ${getStatusColor(currentSystem.status)}`} />
        <ChevronDown className="ml-2 h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu">
            {systems.map((system) => (
              <button
                key={system.id}
                onClick={() => {
                  setCurrentSystem(system);
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between"
              >
                <span>{system.name}</span>
                <span className={`h-2.5 w-2.5 rounded-full ${getStatusColor(system.status)}`} />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};