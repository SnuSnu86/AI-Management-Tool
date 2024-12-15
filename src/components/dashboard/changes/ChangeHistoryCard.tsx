import React from 'react'
import { ChangeRecord } from '../../../types/changes'
import { ChangeHistoryHeader } from './header/ChangeHistoryHeader'
import { ChangesList } from './list/ChangesList'

interface ChangeHistoryCardProps {
  changes: ChangeRecord[]
  isLoading: boolean
  onRefresh: () => void
}

export const ChangeHistoryCard: React.FC<ChangeHistoryCardProps> = ({
  changes,
  isLoading,
  onRefresh
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-4 border-b border-gray-200">
        <ChangeHistoryHeader onRefresh={onRefresh} />
      </div>
      <div className="p-4">
        <ChangesList changes={changes} isLoading={isLoading} />
      </div>
    </div>
  )
}