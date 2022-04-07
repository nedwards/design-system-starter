import React, { ReactNode } from 'react'
import styles from './Header.module.css'

type Props = {
  children: ReactNode
  className?: string
}

const Header = (props: Props) => {
  const { className, children } = props
  return <div className={`${styles.header} ${className}`}>{children}</div>
}

export default Header
