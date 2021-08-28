import Header from './components/header'
import Card from '../../components/card'
import Form from './components/form'
import Style from './styles'

import React from 'react'

const NewLead = () => {
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
