import StyledTable from './styles'

import React, { ChangeEvent, FC, HTMLProps, useState } from 'react'

import { OpportunityType } from '../../../../../@types/lead'

interface OpportunitiesProps extends HTMLProps<HTMLTableElement> {
  changeHandler: (opportunities: OpportunityType[]) => void
}

const Opportunities: FC<OpportunitiesProps> = ({ changeHandler }) => {
  const opprtunities: OpportunityType[] = ['RPA', 'Digital Product', 'Analytics', 'BPM'] // To create new opprtunity just add the name to this list

  const initial_checks: { [key: string]: boolean } = {}
  opprtunities.forEach(name => (initial_checks[name] = false))

  const [checks, setChecks] = useState(initial_checks)

  const changeAllCheacksHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const new_checks = { ...checks }
    opprtunities.forEach(name => (new_checks[name] = e.currentTarget.checked))
    const opportunities_list = opprtunities.filter(name => new_checks[name])

    changeHandler(opportunities_list)
    setChecks(new_checks)
  }

  const checkChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name

    const new_checks = { ...checks, [name]: !checks[name] }
    const opportunities_list = opprtunities.filter(name => new_checks[name])

    changeHandler(opportunities_list)
    setChecks(new_checks)
  }

  const isAllChecksTrue = () => opprtunities.reduce((prev, curr) => prev && checks[curr], true)

  return (
    <StyledTable>
      <thead>
        <tr>
          <th>
            <input name='all' type='checkbox' onChange={changeAllCheacksHandler} checked={isAllChecksTrue()} />
          </th>

          <th />
        </tr>
      </thead>

      <tbody>
        {opprtunities.map((name, i) => (
          <tr key={i}>
            <td>
              <input name={name} type='checkbox' onChange={checkChangeHandler} checked={checks[name]} />
            </td>

            <td>{name}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  )
}

export default Opportunities
