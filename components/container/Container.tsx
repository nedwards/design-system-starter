import React, { ReactNode } from 'react'
import styles from './Container.module.css'

type Props = {
  children: ReactNode
  className?: string
}

const Container = (props: Props) => {
  const { children, className } = props
  return <div className={`${styles.container} ${className}`}>{children}</div>
}

export default Container
