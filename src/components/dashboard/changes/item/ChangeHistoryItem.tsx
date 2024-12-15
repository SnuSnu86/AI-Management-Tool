import React from 'react'
import { ChangeRecord } from '../../../../types/changes'
import { ChangeAvatar } from './ChangeAvatar'
import { ChangeInfo } from './ChangeInfo'

interface ChangeHistoryItemProps {
  change: ChangeRecord
}

export const ChangeHistoryItem: React.FC<ChangeHistoryItemProps> = ({ change }) => {
  return (
    <div className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
      <ChangeAvatar src={change.userAvatar} alt={change.userName} />
      <ChangeInfo change={change} />
    </div>
  )
}