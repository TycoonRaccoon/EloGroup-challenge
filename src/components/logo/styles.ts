import styled from 'styled-components'

const Style = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;

  padding: 20px 25px;
  margin-bottom: 25px;
  margin-top: 10px;
  
  border-radius: 8px;
  background-color: #14222b;

  & > img {
    user-select: none;
    width: 90%;
  }
`
Style.displayName = 'Style'

export default Style
