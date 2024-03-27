import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../../assets/assets'

const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-text'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredation and  elvate your dining experience, one delcious meal at time.</p>
        <div className="explore-list">
            {menu_list.map((item, index) => {
                return (
                    <div className="explore-item" key={index}>
                        <img src={item.menu_image} alt={item.menu_name}/>
                        <p>{item.menu_name}</p>
                        <p>{item.description}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ExploreMenu