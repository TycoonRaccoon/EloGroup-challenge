import styled from 'styled-components'

const StyledForm = styled.form`
  margin-top: 25px;
  margin-bottom: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & div {
    display: flex;
    flex-direction: column;
    width: 75%;

    & label {
      font-weight: 600;
    }

    & input {
      margin-bottom: 20px;
      margin-top: 10px;
      height: 25px;
      font-size: medium;
    }
  }

  & button {
    background-color: #fff;
    border: 1px solid #14222b;
    margin-top: 20px;
    width: 75%;
    padding: 15px 0;
    cursor: pointer;
    font-size: 1.25rem;
  }

  & button:hover {
    color: #fff;
    background-color: #14222b;
    transition: 250ms;
  }
`
StyledForm.displayName = 'StyledForm'

export default StyledForm
