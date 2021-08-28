import styled, { keyframes } from 'styled-components'

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 25px;
  margin-bottom: 45px;

  width: 52vw;
  height: 100%;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  & > div:nth-child(1) {
    width: 45%;

    & > div {
      display: flex;
      flex-direction: column;

      & label {
        margin: 0 0 10px 10px;
        font-weight: 600;
      }

      & input {
        height: 25px;
        width: 75%;
        font-size: medium;
      }
    }
  }

  & > div:nth-child(2) {
    position: relative;
    margin-right: 5%;
    width: 35%;

    & label {
      margin: 0 0 10px 0;
      padding: 0;
    }

    & button {
      background-color: cornflowerblue;
      cursor: pointer;
      border: none;

      margin-top: 35px;
      padding: 15px 0;
      width: 100%;

      font-size: 1.25rem;
      font-weight: 500;
      color: #fff;
    }
  }

  & p.created {
    align-self: center;
    position: absolute;
    bottom: -40px;
    margin: 0;
    color: forestgreen;
    animation-name: ${fadeInOut};
    animation-duration: 3000ms;
    opacity: 0;
  }

  & .noDisplay {
    display: none;
  }
`
StyledForm.displayName = 'StyledForm'

export default StyledForm
