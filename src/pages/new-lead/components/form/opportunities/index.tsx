import StyledTable from './styles'

import React, { FC, ChangeEvent, HTMLProps } from 'react'

import { OpportunityType } from '../../../../../@types/lead'

interface OpportunitiesProps extends HTMLProps<HTMLTableElement> {
  setOpportunities: (opp: OpportunityType[]) => void
  opportunities: OpportunityType[]
}

const Opportunities: FC<OpportunitiesProps> = ({ setOpportunities, opportunities }) => {
  const all_opportunities: OpportunityType[] = ['RPA', 'Digital Product', 'Analytics', 'BPM'] // To create new opprtunity just add the name to this list

  const changeAllCheacksHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.currentTarget.checked

    setOpportunities(checked ? all_opportunities : [])
  }

  const checkChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name
    const checked = e.currentTarget.checked
    const updated_list = checked ? [...opportunities, name] : opportunities.filter(opp => opp !== name)

    setOpportunities(updated_list as OpportunityType[])
  }

  const isAllChecked = () => opportunities.length === all_opportunities.length

  const isSomeChecked = () => opportunities.length > 0

  return (
    <StyledTable>
      <thead>
        <tr>
          <th>
            <input name='all' type='checkbox' onChange={changeAllCheacksHandler} checked={isAllChecked()} />
          </th>

          <th />
        </tr>
      </thead>

      <tbody>
        {all_opportunities.map((name, i) => (
          <tr key={i}>
            <td>
              <input name={name} type='checkbox' onChange={checkChangeHandler} checked={opportunities.includes(name)} required={!isSomeChecked()} />
            </td>

            <td>{name}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  )
}

export default Opportunities
