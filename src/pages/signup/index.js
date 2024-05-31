import React from 'react'
import Form from './Form'
import Form3 from './Form3'
import Form4 from './Form4'
import Button from './Button'
import './img.css';
import Nurse from '../../assets/nurse.jpg';


const Signup = () => {
  return (
    <div className="containe"> 
    <img className="img" src={Nurse} alt="my-image"/>           
        <div className="row">
            <div className="car">
            <div className="car-header">
        <h1>The Online resource App for Sickness Warriors</h1>
        <h2>Create an Account</h2>
           <div className="car-body">
           <Form label=" i am creating an account for"/>        
            <Form label="First Name" label2="Last Name"/>   
            <Form3/>
            <Form4/>
            <Button/>
           </div>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default Signup;