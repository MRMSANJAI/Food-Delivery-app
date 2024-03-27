import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Navbar/Header/Header'
import ExploreMenu from '../../Components/Navbar/Explore/ExploreMenu'
import FootDisplay from '../../Components/Navbar/FoodDisplay/FootDisplay'


const Home = () => {

  const [category , setCategory]=useState("All");
  return (
    <div >
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FootDisplay category={category}/>
    </div>
  )
}

export default Home