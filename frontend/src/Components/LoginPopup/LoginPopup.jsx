import React from 'react'
import './LoginPopup.css'
import { useState } from 'react'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

const [currentState, setCurrentState]= useState("Login")

  return (
    <div className='loginpopup'>
        <form  className="login-container">
          <div className="login-title">
            <h2>{currentState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" className="" />
          </div>
          <div className="login-popup">
            {currentState==="Login"?<></>:<input type="text" placeholder='Your Name' required/>}
            <input type="email" placeholder='Your email' required />
            <input type="password" placeholder='password' className="" />
          </div>
          <button>{currentState==="Sign Up"?"Create account":"Login"}</button>
           <div className="login-popup-condation">
            <input type="checkbox" required />
            <p>By continuing , i agree to the terms of use & privacy policy.</p>
           </div>
           {currentState==="Login"
           ? <p>Create an account? <span onClick={()=>setCurrentState("Sign up")}>Click here</span></p>
           :<p>Already have an account?<span  onClick={()=>setCurrentState("Login")}>Login here</span></p>
           }
          
           
        </form>
    </div>
  )
}

export default LoginPopup