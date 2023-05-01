import React from 'react'
import './HomeStyle.css'
import '../GeneralStyles/Card.css'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShekelSign } from '@fortawesome/free-solid-svg-icons';
export default function HomePage() {

  return (
    <>
      <h1>Welcome To Abed's Store </h1>
      <h2 style={{marginLeft:'50px'}}>The Most Recommended</h2>
      <div class="Cars" style={{background:' #747474',padding:'80px',marginTop:'1px'}}>
        <Link to="/ShoePage" style={{color:'black', textDecoration: 'none'}}>
        <div class="Shoecard">
          <img className='Cardimg' src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-rWtqPn.png" alt="Avatar"/>
          <div class="container">
            <span className='ShoeName'><b>Nike Air Force</b></span>
            <span><b>Color : </b>White</span>
            <span><b>Price : </b>250 <FontAwesomeIcon icon={faShekelSign} size="xs" /></span>
          </div>
        </div>
        </Link>
        
        </div>
      <h2>About Us</h2>
      <p>Welcome to Abed's Store, where we provide a wide variety of shoes for all genders. Our store is dedicated to providing our customers with high-quality footwear that not only looks great but also feels comfortable.
         At Abed's Store, we understand that everyone has different needs when it comes to their footwear, and that's why we offer a range of styles, sizes, and colors to suit every taste.
        Our mission is to provide our customers with the best possible experience when shopping for shoes. We believe that everyone deserves to have access to high-quality footwear that meets their needs and exceeds their expectations.
         That's why we carefully select each pair of shoes in our inventory to ensure that they meet our high standards for quality, comfort, and style.
        Whet her you're looking for a pair of stylish sneakers for casual wear.</p>
    </>
  )
}
