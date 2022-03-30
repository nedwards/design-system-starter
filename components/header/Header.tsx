import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

const Header = ({ children, className }: Props) => {
  return <div className={className || ''}>{children}</div>
}

export default Header
