import React from 'react'
import './Forms.css'
const Form = ({label, label2}) => {
  return (
    <div className="form-container">
    <div className="patient-medical">
    <label className='label'>{label}</label>
      <input
        type="text"
        name="name"
        placeholder="Patient"
/>
    </div>

    <div className='patient-medical'>
    <label className='label'>{label2}</label>
      <input
        type="email"
        name="email"
        placeholder="Medical Doctor"
      />
    </div>

    
    
  </div>

  
  )
}

export default Form;
