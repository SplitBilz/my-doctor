import React from 'react'
import './Forms.css'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Form3 = () => {
  return (
    <div className="form-container">
    <div className="patient-medical">
    <label className='label' >Phone Number</label>
      <PhoneInput className="phone"
        country={'us'}
/>
    </div>

    <div className='patient-medical'>
    <label className='label'>Email</label>
      <input
        type="email"
        name="email"
        placeholder="Enter"
      />
    </div>
    
  </div>
  )
}

export default Form3
