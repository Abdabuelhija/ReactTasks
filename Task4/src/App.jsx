import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar/NavPage'
import HomePage from './HomePage/HomePage'
import ShoePage from './ShoePage/ShoePage'
import ShoesPage from './ShoesPage/ShoesPage'
import { Link } from 'react-router-dom';

function App() {
  return (
      <>
        <div className='Nav'>
          <Navbar/>
        </div>
        <div className='RoutesStyle'>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Home" element={<HomePage/>} />
        <Route path="/ShoesPage" element={<ShoesPage/>}/ >
        <Route path="/ShoePage" element={<ShoePage/>} />
      </Routes>
        </div>
      </>
  )
}
export default App;


