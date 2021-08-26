import Style from './styles'
import React, { HTMLAttributes } from 'react'

const Card = ({ children, ...rest }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <Style {...rest}>
      {children}
    </Style>
  )
}

export default Card
