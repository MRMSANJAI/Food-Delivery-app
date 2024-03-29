import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/Explore/ExploreMenu'
import FootDisplay from '../../Components/FoodDisplay/FootDisplay'
import AppDownlode from '../../Components/AppDownlode/AppDownlode'


const Home = () => {

  const [category , setCategory]=useState("All");
  return (
    <div >
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FootDisplay category={category}/>
      <AppDownlode/>
    </div>
  )
}

export default Home