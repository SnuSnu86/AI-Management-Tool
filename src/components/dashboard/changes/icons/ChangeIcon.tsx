import React from 'react'
import { Settings, Database } from 'lucide-react'
import { ChangeIconProps } from '../../../../types/changes'

export const ChangeIcon: React.FC<ChangeIconProps> = ({ category, className }) => {
  if (category === 'settings') {
    return <Settings className={className} />
  }
  return <Database className={className} />
}