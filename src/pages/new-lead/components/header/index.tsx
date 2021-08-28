import Logo from '../../../../components/logo'
import StyledHeader from './styles'

import React from 'react'

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <span>
        <h1>New Lead</h1>
      </span>
    </StyledHeader>
  )
}

export default Header
