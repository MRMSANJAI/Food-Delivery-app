import React, { useContext, useState } from 'react';
import "./Cart.css";
import { StoreContext } from '../../Context/StoreContext';

const Cart = () => {
const {cartItems ,food_list,removeFromCart} = useContext(StoreContext)

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
              <div className="cartitems-title cartitems-items">
                <img src={item.image} alt="" className="" />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>{item.price*cartItems[item._id]}</p>
                <p>x</p>
              </div>
            )
            
           }
        })}
      </div>

    </div>
  );
}
export default Cart;