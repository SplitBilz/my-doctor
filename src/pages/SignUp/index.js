 
 import React,{useState} from 'react'
 import { useNavigate } from 'react-router-dom';
 import './signup.css'

const SignUp = ()=>{

const [name, setName] = useState ('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState ('');

const navigate = useNavigate();


 const handleSubmit =(event)=>{
    event.preventDefault()
 }
    return(
        <div className='main-wrapper'>
            <form className='signin-form' onSubmit ={handleSubmit} >
                <label htmlFor="fullname">FullName</label>
                <input  value ={name} onChange={(event)=>setName(event.target.value)}type='text' placeholder="FullName" id="fullname"/>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(event)=>setEmail(event.target.value)}type='text' placeholder="Email" id="email"/>
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(event)=>setPassword(event.target.value)} type='Password' placeholder="Password"id="password"/>
                <button  className='signup-btn'type='submit'>Sign Up</button>
                <p className='sign-in' onClick={() => navigate('/login')}>Already have an Account? Sign in here </p>
                </form>
            
            </div>
     
    )


}



export default SignUp;