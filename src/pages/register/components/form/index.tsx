import React, { useState, FormEvent, ChangeEvent } from 'react'
import { useHistory } from 'react-router-dom'
import StyledForm from './styles'

const Form = () => {
  const initial_form_data = {
    username: '',
    password: '',
    confirm_password: ''
  }

  const [formData, setFormData] = useState(initial_form_data)
  const history = useHistory()

  const changehandler = (e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    window.localStorage.setItem('user', JSON.stringify(formData))
    history.push('/leads-painel')
  }

  return (
    <StyledForm onSubmit={submitHandler}>
      <div>
        <label>Username *</label>
        <input name='username' autoFocus required onChange={changehandler} />
      </div>

      <div>
        <label>Password *</label>
        <input name='password' type='password' required minLength={8} onChange={changehandler} />
      </div>

      <div>
        <label>Confirm Password *</label>
        <input name='confirm_password' type='password' required minLength={8} pattern={formData.password} onChange={changehandler} />
      </div>

      <button>Register</button>
    </StyledForm>
  )
}

export default Form
