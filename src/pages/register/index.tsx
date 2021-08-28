import Logo from '../../components/logo'
import Card from '../../components/card'
import Form from './components/form'
import Style from './styles'

import React, { FC } from 'react'

const Register: FC = () => {
  return (
    <Style>
      <Card>
        <header>
          <Logo />
        </header>
        <main>
          <Form />
        </main>
      </Card>
    </Style>
  )
}

export default Register
