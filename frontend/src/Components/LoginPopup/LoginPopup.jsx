import React, { useContext } from 'react'
import './LoginPopup.css'
import { useState } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import axios from "axios"

const LoginPopup = ({setShowLogin}) => {

const {url ,setToken} = useContext(StoreContext)

const [currentState, setCurrentState]= useState("Login")
const [data,setData]= useState({
  name:'',
  email:'',
  password:''
})

const onChangeHandler= (event)=>{
  const name = event.target.name;
  const value = event.target.value;
  setData(data=>({...data,[name]:value}))
}

const onLogin = async (event)=>{
 event.preventDefault()
let newUrl = url;
if (currentState === 'Login') {
  newUrl += "/api/user/login"

}
else{
  newUrl += "/api/user/register"
}
const response = await  axios.post(newUrl,data);

if(response.data.success){
 setToken(response.data.token);
 localStorage.setItem('token', response.data.token);
 setShowLogin(false)

}
else{
  alert(response.data.message)
}
}

  return (
    <div className='loginpopup'>
        <form onSubmit={onLogin} className="login-container">
          <div className="login-title">
            <h2>{currentState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" className="" />
          </div>
          <div className="login-popup">
            {currentState==="Login"?<></>:<input name='name'onChange={onChangeHandler}value={data.name} type="text" placeholder='Your Name' required/>}
            <input name='email'onChange={onChangeHandler}value={data.email} type="email" placeholder='Your email' required />
            <input name='password'onChange={onChangeHandler}value={data.password} type="password" placeholder='password' className="" />
          </div>
          <button type='submit'>{currentState==="Sign Up"?"Create account":"Login"}</button>
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