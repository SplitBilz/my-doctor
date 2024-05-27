import React from 'react';
import './Forms.css';
// npx tailwindcss init
import { FaEye } from "react-icons/fa";

const Form4 = () => {
  return (
    <div className="form-container">
    <div className="patient-medical" >
    <label className='label'>Password</label>
      <input 
        type="text"
        name="name"
        placeholder="Enter"
/>
    </div>
    
    <div className='eye1'>
        <FaEye/>
    </div>
    

    <div className='patient-medical'>
    <label className='label'>Comfirm Password</label>
      <input
        type="text"
        name="email"
        placeholder="Enter"
      />
    </div>

    <div className='eye'>
        <FaEye/>
    </div>    
  </div>
  )
}

export default Form4
