import React, { useContext } from 'react'
import './Placeorder.css'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Placeorder = () => {

  const {getTotalCartAmount}=useContext(StoreContext);

  return (
   <form  className="placeorder">
     <div className="placeorder-left">
      <p className='title'> Delivery Information</p>
      <div className="multi-fields">
        <input type="text" placeholder='First Name'/>
        <input type="text"  placeholder='Last Name' />
      </div>
      <input type="text" placeholder="Email Address" />
      <input type="text" placeholder='Street' />
      <div className="multi-fields">
        <input type="text" placeholder='City'/>
        <input type="text"  placeholder='State' />
      </div>
      <div className="multi-fields">
        <input type="text" placeholder='Zip-code'/>
        <input type="text"  placeholder='Country' />

      </div>
      <input type="text" placeholder='Phone' />
     </div>
     <div className="placeorder-right">
     <div className="cart-total">
              <h2>Cart Total</h2>
              <div className="carttotal-details">
                <p>SubTotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr/>
              <div className="carttotal-details">
                <p>Delivery Fee</p>
                <p>{2}</p>
              </div>
              <hr/>
              <div className="carttotal-details">
                <b>Total</b>
                <b>{getTotalCartAmount()+2}</b>
              </div>
              <button>PROCCED TO PAYMENT</button>
            </div>
     </div>
   </form>

  )
}

export default Placeorder