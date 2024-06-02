import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import List from './pages/LIST/List'
import Order from './pages/ORDER/Order'
import Added from './pages/ADD/Added'
import {Route, Routes} from'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <ToastContainer/>
     <Navbar/>
     <hr/>
     <div className="app-content">
      <Sidebar/>
      <Routes>
        <Route path='/add' element={<Added/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/order' element={<Order/>}/>
      </Routes>
     </div>
    </div>
  )
}

export default App