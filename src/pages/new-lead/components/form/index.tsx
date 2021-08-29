import Opportunities from './opportunities'
import api from '../../../../services/api'
import StyledForm from './styles'

import { OpportunityType, CustomerData, Lead } from '../../../../@types/lead'

import React, { FC, useState, useRef, FormEvent, ChangeEvent } from 'react'

const Form: FC = () => {
  const initial_form_data: Lead = {
    status: 'Potential',
    data: {
      name: '',
      phone: '',
      email: ''
    },
    opportunities: []
  }

  const [form_data, setFormData] = useState(initial_form_data)
  const message_ref = useRef<HTMLParagraphElement>(null)

  const animationEndHandler = () => (message_ref.current!.className = 'noDisplay')

  const setOpportunities = (opportunities: OpportunityType[]) => setFormData({ ...form_data, opportunities })

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const updated_data = { ...form_data }
    updated_data.data[e.target.name as keyof CustomerData] = e.target.value

    setFormData(updated_data)
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const leads_list = api.get('leads')

    if (leads_list) {
      leads_list.push(form_data)
      api.post('leads', leads_list)
    } else api.post('leads', [form_data])

    message_ref.current!.className = 'created'
    setFormData(initial_form_data)
  }

  return (
    <StyledForm onSubmit={submitHandler}>
      <div>
        <div>
          <label>Name *</label>
          <input name='name' autoFocus required onChange={changeHandler} value={form_data.data.name} />
        </div>

        <div>
          <label>Phone *</label>
          <input name='phone' required onChange={changeHandler} value={form_data.data.phone} />
        </div>

        <div>
          <label>Email *</label>
          <input name='email' required onChange={changeHandler} value={form_data.data.email} />
        </div>
      </div>

      <div>
        <label>Opportunities *</label>

        <Opportunities opportunities={form_data.opportunities} setOpportunities={setOpportunities} />

        <button type='submit'>Save</button>

        <p className='noDisplay' onAnimationEnd={animationEndHandler} ref={message_ref}>
          Lead created!
        </p>
      </div>
    </StyledForm>
  )
}

export default Form
