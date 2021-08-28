import StyledButton from './styles'

import React, { MouseEvent } from 'react'
import { useHistory } from 'react-router-dom'

const Button = () => {
  const history = useHistory()

  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    history.push('/new-lead')
  }

  return <StyledButton onClick={clickHandler}>New Lead (+)</StyledButton>
}

export default Button
