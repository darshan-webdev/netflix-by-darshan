import React, { useState } from 'react'
import './login.css'
import Logo from'../../assets/logo.png'
import {login,signup} from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'

import { Await } from 'react-router-dom'
const Login = () => {
  const [signstate,setsignup]=useState("sign-in")
const[name,setname]= useState("")
const[email,setemail]= useState("")
const[password,setpassword]= useState("")
const [loading,setloading] = useState(false)

const user_auth= async (event)=>{
  
  event.preventDefault();
     setloading(true)
  if(signstate==="sign-in"){
    await login(email,password)
  
  }
  else{
    await signup (name,email,password)
  }
  setloading(false)
}
  return (
    loading?<div className="login-spiner">
      <img src={netflix_spinner} alt="" />
    </div>:
    <div className='loginpage'>
      <img src={Logo} alt="" />
      <div className="login-form">
        <h1>{signstate}</h1>
      <form>
        {signstate === "sign up" ? 
        <input value={name} onChange={(e)=>{setname(e.target.value)}} 
             type="text" placeholder='your name' />  :<></>}
       
      <input  value={email} onChange={(e)=>{setemail(e.target.value)}}     
          type="email" placeholder='enter your mail id' />

       <input  value={password} onChange={(e)=>{setpassword(e.target.value)}}     
            type="password" placeholder='enter your password'/>

            <button onClick={user_auth} type='sumbit'> {signstate} </button>
            <div className="form-help">
             <input type="checkbox" />
             <label htmlFor="">remember me</label>
            </div>

            <p>need help?</p>
      </form>
<div className="form-switch">
  {signstate === "sign-in" ?  <p>New to netflix? <span onClick={()=>{setsignup("sign up")}}> sign up </span></p> :  <p>Already have an account ? <span onClick={()=>{setsignup("sign-in")}}> sign up </span></p>}
</div>
      </div>
    </div>
  )
}

export default Login