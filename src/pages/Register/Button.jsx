import React from 'react'
import './Forms.css'
import { CiPhone } from 'react-icons/ci';
import { CgMail } from "react-icons/cg";


const Button = () => {
  return (
    <div className='container'>
                 <p>By creating an account, you agree to Dcor'es <span>Terms of Service</span> and <span> Privacy Policy</span></p>
        <div className='btn-p'>
        <button className='btn'>Create Account</button>
        </div>
        <p className='sec'>Have an acoout? <span>Sign in</span></p>
        <div className='ciphone'>
        <CiPhone color='red' />
          <p>+2348313287622</p>
          </div>

          <div className='cgmail'>
          <CgMail color='red'/>  
         <p>accounts@dcore.com</p>

        </div>
    </div>
  )
}

export default Button
