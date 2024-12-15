export interface ChangeRecord {
  id: string
  userId: string
  userName: string
  userAvatar: string
  timestamp: Date
  category: ChangeCategory
  component: string
  description: string
}

export type ChangeCategory = 'settings' | 'data'

export interface ChangeIconProps {
  category: ChangeCategory
  className?: string
}