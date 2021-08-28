import StyledTable from './styles'

import { LeadStatus, Lead } from '../../../../@types/lead'

import React, { useState, DragEvent } from 'react'

const Table = () => {
  const fetchData = () => JSON.parse(window.localStorage.getItem('leads') || '[]') // create api file
  const [list, setList] = useState<Lead[]>(fetchData)

  const allowDragHandler = (e: DragEvent<HTMLTableDataCellElement>) => e.preventDefault()

  const dragStarHandler = (e: DragEvent<HTMLTableDataCellElement>) => {
    const index = e.currentTarget.dataset.index!
    e.dataTransfer.setData('text', index)
  }

  const dropHandler = (e: DragEvent<HTMLTableDataCellElement>) => {
    e.preventDefault()

    const index = e.dataTransfer.getData('text') as unknown as number
    const allowed_index = e.currentTarget.parentElement!.dataset.allowed_index as unknown as number

    if (index !== allowed_index) return

    const updated_item = { ...list[index] }

    updated_item.status = e.currentTarget.dataset.status as LeadStatus

    const updated_list = [...list]
    updated_list[index] = updated_item

    window.localStorage.setItem('leads', JSON.stringify(updated_list))

    setList([...updated_list])
  }

  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Potential Client</th>
          <th>Confirmed Data</th>
          <th>Scheduled</th>
        </tr>
      </thead>
      <tbody>
        {list.map((lead, i) => {
          switch (lead.status) {
            case 'Potential':
              return (
                <tr key={i} data-allowed_index={i}>
                  <td data-status='Potential' data-index={i} draggable onDragStart={dragStarHandler}>
                    {lead.data.name}
                  </td>
                  <td data-status='Confirmed' onDragOver={allowDragHandler} onDrop={dropHandler}></td>
                  <td data-status='Scheduled'></td>
                </tr>
              )
            case 'Confirmed':
              return (
                <tr key={i} data-allowed_index={i}>
                  <td data-status='Potential'></td>
                  <td data-status='Confirmed' data-index={i} draggable onDragStart={dragStarHandler}>
                    {lead.data.name}
                  </td>
                  <td data-status='Scheduled' onDragOver={allowDragHandler} onDrop={dropHandler}></td>
                </tr>
              )
            case 'Scheduled':
              return (
                <tr key={i} data-allowed_index={i}>
                  <td data-status='Potential'></td>
                  <td data-status='Confirmed'></td>
                  <td data-status='Scheduled'>{lead.data.name}</td>
                </tr>
              )
            default:
              return null
          }
        })}
      </tbody>
    </StyledTable>
  )
}

export default Table
