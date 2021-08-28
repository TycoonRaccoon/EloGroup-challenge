import styled from 'styled-components'

const StyledTable = styled.table`
  border-collapse: collapse;

  & th,
  td {
    border: 1px solid black;
    text-align: center;
    user-select: none;
  }

  & th {
    background-color: gray;
    font-weight: 500;
    color: white;
  }

  & tr:nth-child(even) {
    background-color: lightgray;
  }
`
StyledTable.displayName = 'StyledTable'

export default StyledTable
