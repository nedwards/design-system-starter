import React, { ReactNode } from 'react'
import styles from './Footer.module.css'

type Props = {
  children: ReactNode
  className?: string
}

const Footer = (props: Props) => {
  const { children, className } = props
  return <div className={`${styles.footer} ${className}`}>{children}</div>
}

export default Footer
