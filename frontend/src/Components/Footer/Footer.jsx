import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
   <div className="footer"id="footer">
      <div className="footer-content">
        <div className="footer-left">
           <img src={assets.logo} alt="" className="" />
           <p>Discover culinary delights with our food delivery app. From gourmet meals to comfort classics, we bring the flavors you crave right to your doorstep. Order now for a delicious experience delivered with convenience!</p>
           <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" className="" />
            <img src={assets.twitter_icon} alt="" className="" />
            <img src={assets.linkedin_icon}alt="" className="" />
           </div>
        </div>
        <div className="footer-center">
           <h2>COMPANY</h2>
           <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
           </ul>
        </div>
        <div className="footer-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-121-456-7869</li>
            <li>contact@mrmsanjai@gamil.com</li>
          </ul>
        </div>
      </div>
      <hr/>
        <p className="footer-copyright">Copyright 2024 @ tomoto.com - All Rights Reserved@mrmsanjai</p>
   </div>
  )
}

export default Footer