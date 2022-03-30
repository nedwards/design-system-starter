import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

const Footer = ({ children, className }: Props) => {
  return <div className={className || ''}>{children}</div>
}

export default Footer
