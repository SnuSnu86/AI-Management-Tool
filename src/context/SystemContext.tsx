import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AISystem } from '../types';

interface SystemContextType {
  currentSystem: AISystem;
  systems: AISystem[];
  setCurrentSystem: (system: AISystem) => void;
  updateSystemStatus: (systemId: string, status: AISystem['status']) => void;
}

const defaultSystems: AISystem[] = [
  { id: '1', name: 'AI Phone', status: 'stopped' },
  { id: '2', name: 'AI Chatbot', status: 'stopped' },
  { id: '3', name: 'AI Social Media', status: 'stopped' }
];

const SystemContext = createContext<SystemContextType | undefined>(undefined);

export const SystemProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [systems, setSystems] = useState<AISystem[]>(defaultSystems);
  const [currentSystem, setCurrentSystem] = useState<AISystem>(systems[0]);

  const updateSystemStatus = (systemId: string, status: AISystem['status']) => {
    setSystems(prevSystems => 
      prevSystems.map(system => 
        system.id === systemId ? { ...system, status } : system
      )
    );
    
    if (currentSystem.id === systemId) {
      setCurrentSystem(prev => ({ ...prev, status }));
    }
  };

  return (
    <SystemContext.Provider 
      value={{ 
        currentSystem, 
        systems, 
        setCurrentSystem, 
        updateSystemStatus 
      }}
    >
      {children}
    </SystemContext.Provider>
  );
};

export const useSystem = () => {
  const context = useContext(SystemContext);
  if (!context) {
    throw new Error('useSystem must be used within a SystemProvider');
  }
  return context;
};