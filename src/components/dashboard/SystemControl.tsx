import React from 'react';
import { Play, Pause, StopCircle } from 'lucide-react';
import { ControlButton } from './ControlButton';
import { useSystem } from '../../context/SystemContext';

const SystemControl = () => {
  const { currentSystem, updateSystemStatus } = useSystem();

  return (
    <div className="flex space-x-2">
      <ControlButton
        icon={<Play className="h-4 w-4" />}
        label=""
        variant="success"
        onClick={() => updateSystemStatus(currentSystem.id, 'active')}
        active={currentSystem.status === 'active'}
      />
      <ControlButton
        icon={<Pause className="h-4 w-4" />}
        label=""
        variant="warning"
        onClick={() => updateSystemStatus(currentSystem.id, 'training')}
        active={currentSystem.status === 'training'}
      />
      <ControlButton
        icon={<StopCircle className="h-4 w-4" />}
        label=""
        variant="danger"
        onClick={() => updateSystemStatus(currentSystem.id, 'stopped')}
        active={currentSystem.status === 'stopped'}
      />
    </div>
  );
};

export default SystemControl;