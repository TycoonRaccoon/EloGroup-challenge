import styled from 'styled-components'

const StyledTable = styled.table`
  border-collapse: collapse;
  margin-top: 10px;

  & th,
  td {
    border: 1px solid black;
    padding: 20px;
    width: 310px;
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
