import React, { useState } from 'react';
import './ShoesStyle.css';
import '../GeneralStyles/Card.css';
import { Link, NavLink } from 'react-router-dom';
import {  useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faShekelSign } from '@fortawesome/free-solid-svg-icons';
export default function HomePage() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Shoe</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>Add Shoe</Button>
        </Modal.Footer>
      </Modal>

      <h1>All The Shoes</h1>
      <button class="Add-car" onClick={handleShow} ><FontAwesomeIcon icon={faPlus} style={{color: "#ffffff",}} /> Add Shoe </button>
      <div class="Cars">
        <Link to="/ShoePage" style={{ color: 'black', textDecoration: 'none' }}>
          <div class="Shoecard">
            <img className='Cardimg'
              src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-rWtqPn.png"
              alt="Avatar"
            />
            <div class="container">
              <span className="ShoeName">
                <b>Nike Air Force</b>
              </span>
              <span>
                <b>Color : </b>White
              </span>
              <span><b>Price : </b>250 <FontAwesomeIcon icon={faShekelSign} size="xs" /></span>

            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

