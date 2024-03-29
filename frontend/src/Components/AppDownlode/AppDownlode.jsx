import React from 'react'
import "./AppDownlode.css"
import { assets } from '../../assets/assets'

const AppDownlode = () => {
  return (
    <div className='app-downlode'>
        <p>For Better Experience Downlode<br/>Tomoto App</p>
        <div className="app-downlode-platforms">
            <img src={assets.play_store} alt="" className="" />
            <img src={assets.app_store} alt="" className="" />
        </div>
        
    </div>
  )
}

export default AppDownlode