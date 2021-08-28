import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: cornflowerblue;
  cursor: pointer;
  border: none;

  margin-top: 35px;
  padding: 15px 0;
  width: 350px;

  font-size: 1.25rem;
  font-weight: 500;
  color: #fff;
`
StyledButton.displayName = 'StyledButton'

export default StyledButton
