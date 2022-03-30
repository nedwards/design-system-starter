import React, { ReactNode } from 'react'
import classnames from 'classnames'

type Props = {
  className?: string
  children: ReactNode
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
}

const Grid = ({ className, cols, children }: Props) => {
  return (
    <div
      className={classnames(
        'sm:grid sm:gap-4 space-y-3 sm:space-y-0',
        {
          [`sm:grid-cols-${cols}`]: cols || 12,
        },
        className || ''
      )}
    >
      {children}
    </div>
  )
}

export default Grid
