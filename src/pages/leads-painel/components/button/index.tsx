import StyledButton from './styles'

import React, { FC, MouseEvent } from 'react'
import { useHistory } from 'react-router-dom'

const Button: FC = () => {
  const history = useHistory()

  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    history.push('/new-lead')
  }

  return <StyledButton onClick={clickHandler}>New Lead (+)</StyledButton>
}

export default Button
