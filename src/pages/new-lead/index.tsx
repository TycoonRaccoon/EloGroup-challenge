import Header from './components/header'
import Card from '../../components/card'
import Form from './components/form'
import Style from './styles'

import React, { FC } from 'react'

const NewLead: FC = () => {
  return (
    <Style>
      <Card>
        <Header />
        <main>
          <Form />
        </main>
      </Card>
    </Style>
  )
}

export default NewLead
