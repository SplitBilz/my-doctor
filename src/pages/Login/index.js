import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';



const SignIn = () => {

  const [email,  setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit =(event)=>{ event.preventDefault() }



  return (
    <div className='main'>
      <div className='first-container'></div>
      <div className='second-container'>
        <h4>The online resource app for sickness warriors</h4>
        <form  className='login-form' onSubmit ={handleSubmit}>
          <h4> Sign In</h4>
          <label htmlFor='emaile '>Email</label>
          <input className='input' value={email} onChange={(event)=>setEmail(event.target.value)}type='text' placeholder='Email' id='Email' name='email'/>
          <label htmlFor='password'>Password</label>
          <input className='input' value={password} onChange={(event)=>setPassword(event.target.value)}type='password' placeholder='****'Enter id='password' name='password'/>
          <p style={{alignSelf:'end', marginTop:'10px', fontSize:'14px'}}>Forget password?</p>
          <button type='submit' className='signin-btn'> Sign in</button>
          </form>
          <p style={{alignSelf: 'center'}} onClick={() => navigate('/SignUp')}>Don't have an account?<span style={{color: 'red'}}> Sign Up</span></p>
      </div> 
     </div>

  )
}

export default SignIn;