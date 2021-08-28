import Header from './components/header'
import Button from './components/button'
import Card from '../../components/card'
import Table from './components/table'
import Style from './styles'

import React from 'react'

const LeadsPainel = () => {
  return (
    <Style>
      <Card>
        <Header />
        <main>
          <Button />
          <Table />
        </main>
      </Card>
    </Style>
  )
}

export default LeadsPainel
