import React from 'react'
import { ChangeRecord } from '../../../../types/changes'
import { ChangeHistoryItem } from '../item/ChangeHistoryItem'
import { EmptyChangesList } from './EmptyChangesList'
import LoadingSpinner from '../../../common/LoadingSpinner'

interface ChangesListProps {
  changes: ChangeRecord[]
  isLoading: boolean
}

export const ChangesList: React.FC<ChangesListProps> = ({ changes, isLoading }) => {
  if (isLoading) {
    return <LoadingSpinner />
  }

  if (changes.length === 0) {
    return <EmptyChangesList />
  }

  return (
    <div className="space-y-4">
      {changes.map((change) => (
        <ChangeHistoryItem key={change.id} change={change} />
      ))}
    </div>
  )
}