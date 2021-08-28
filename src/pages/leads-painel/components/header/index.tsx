import Logo from '../../../../components/logo'
import StyledHeader from './styles'

import React, { FC } from 'react'

const Header: FC = () => {
  return (
    <StyledHeader>
      <Logo />
      <span>
        <h1>Leads Painel</h1>
      </span>
    </StyledHeader>
  )
}

export default Header
