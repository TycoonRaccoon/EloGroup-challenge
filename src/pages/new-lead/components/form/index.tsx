import Opportunities from './opportunities'
import StyledForm from './styles'

import { OpportunityType, Lead } from '../../../../@types/lead'

import React, { useState, FormEvent, ChangeEvent, useRef } from 'react'

const Form = () => {
  const initial_form_data: Lead = {
    status: 'Potential',
    data: {
      name: '',
      phone: '',
      email: ''
    },
    opportunities: []
  }

  const [formData, setFormData] = useState(initial_form_data)
  const message_ref = useRef<HTMLParagraphElement>(null)

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, data: { ...formData.data, [e.target.name]: e.target.value } })
  }

  const opportunityHandler = (opportunities: OpportunityType[]) => setFormData({ ...formData, opportunities })

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const leads_list = window.localStorage.getItem('leads')

    if (leads_list) {
      const leads = JSON.parse(leads_list)
      leads.push(formData)
      window.localStorage.setItem('leads', JSON.stringify(leads))
    } else window.localStorage.setItem('leads', JSON.stringify([formData]))

    message_ref.current!.className = 'created'
    setFormData(initial_form_data)
  }

  return (
    <StyledForm onSubmit={submitHandler}>
      <div>
        <div>
          <label>Name *</label>
          <input name='name' autoFocus required onChange={changeHandler} value={formData.data.name} />
        </div>

        <div>
          <label>Phone *</label>
          <input name='phone' required onChange={changeHandler} value={formData.data.phone} />
        </div>

        <div>
          <label>Email *</label>
          <input name='email' required onChange={changeHandler} value={formData.data.email} />
        </div>
      </div>

      <div>
        <p>Opportunities *</p>

        <Opportunities opportunities={formData.opportunities} setOpportunities={opportunityHandler} />

        <button type='submit'>Save</button>

        <p className='noDisplay' onAnimationEnd={() => (message_ref.current!.className = 'noDisplay')} ref={message_ref}>
          Lead created!
        </p>
      </div>
    </StyledForm>
  )
}

export default Form
