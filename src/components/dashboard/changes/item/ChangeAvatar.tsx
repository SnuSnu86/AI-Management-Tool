import React from 'react'

interface ChangeAvatarProps {
  src: string
  alt: string
}

export const ChangeAvatar: React.FC<ChangeAvatarProps> = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="w-10 h-10 rounded-full"
  />
)