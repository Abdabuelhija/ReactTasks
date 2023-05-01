import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './NavStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
export default function Navbar() {
  return (
    <>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/Home" class="navbar-brand"><FontAwesomeIcon icon={faHouse} size="xs" style={{color: "#111722",marginRight:'5px'}} />Home</Link>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <Link to="/ShoesPage" class="nav-link">Shoes</Link>
                </li>
                <li class="nav-item">
                <Link to="/ShoesPage" class="nav-link">Other</Link>
                </li>
              </ul>
            </div>
            
      </nav>
    </>
  )
}
