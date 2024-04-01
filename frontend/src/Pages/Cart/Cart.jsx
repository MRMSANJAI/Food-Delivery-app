import React, { useContext, useState } from 'react';
import "./Cart.css";
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
const {cartItems ,food_list,removeFromCart,getTotalCartAmount} = useContext(StoreContext)
const navigate = useNavigate()

  return (
    <div className='cart'>
      <div className="cartitems">
        <div className="cartitems-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {food_list.map((item,index)=>{
           if (cartItems[item._id]>0) 
           {
            return(
              <div>
              <div className="cartitems-title cartitems-items">
                <img src={item.image} alt="" className="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price*cartItems[item._id]}</p>
                <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
              </div>
              <hr/>
              </div> 
            )
            
           }
        })}
      </div>
          <div className="cart-bottom">
            <div className="cart-total">
              <h2>Cart Total</h2>
              <div className="carttotal-details">
                <p>SubTotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr/>
              <div className="carttotal-details">
                <p>Delivery Fee</p>
                <p>{getTotalCartAmount()===0?0:2}</p>
              </div>
              <hr/>
              <div className="carttotal-details">
                <b>Total</b>
                <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
              </div>
              <button onClick={()=>navigate('/order')}>PROCCED TO CHECKOUT</button>
            </div>
            <div className="cart-promocode">
             <div className="">
              <p>If you have a promo code ,Enter it here</p>
              <div className='cart-promo-input'>
                <input type="text" placeholder="promo code"/>
                <button>Submit</button>
              </div>
             </div>
            </div>
          </div>
    </div>
  );
}
export default Cart;