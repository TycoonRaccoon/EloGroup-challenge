import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;

  & > span {
    display: inline;
    padding-left: 15%;
    white-space: nowrap;

    & h1 {
      font-weight: 500;
    }
  }
`
StyledHeader.displayName = 'StyledHeader'

export default StyledHeader
