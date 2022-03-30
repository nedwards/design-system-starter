import React, { ReactNode } from 'react'
import classnames from 'classnames'

type Props = {
  className?: string
  children: ReactNode
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
}

const Column = ({ className, cols, children }: Props) => {
  return (
    <div
      className={classnames(
        {
          [`col-span-${cols}`]: cols,
        },
        className || ''
      )}
    >
      {children}
    </div>
  )
}

export default Column
