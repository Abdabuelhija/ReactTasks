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
  document.title="Abeds Shoes - All Shoes";
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
<Modal show={show} onHide={handleClose} animation={false}>
  <Modal.Header closeButton>
    <Modal.Title><br/><h1>Add Shoe</h1></Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <form class="row" onSubmit={handleClose}>
      <div class="form-group col-md-6">
        <label for="inputEmail4">Name</label>
        <input type="text" class="form-control" id="inputEmail4" placeholder="Nike Air Force" required/>
      </div>
      <div class="form-group col-md-6">
        <label for="inputEmail4">Color</label>
        <input type="text" class="form-control" id="inputPassword4" placeholder="White" required/>
      </div>
      <div class="form-group col-md-6">
        <label for="inputEmail4">Price</label>
        <input type="number" class="form-control" id="inputEmail4" placeholder="700" required/>
      </div>
      <div class="form-group col-md-6">
        <label for="inputPassword4">Sizes</label>
        <input type="text" class="form-control" id="inputPassword4" placeholder="(41-46)" required/>
      </div>
      <div class="form-group col-md-12">
        <label for="inputAddress">image1 url</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="https://static.nike.com/a/images/t_PDP_1728_v1/" required/>
      </div>
      <div class="form-group col-md-12">
        <label for="inputAddress">image2 url</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="https://static.nike.com/a/images/t_PDP_1728_v1/" required/>
      </div>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" type="submit">Add Shoe</Button>
      </Modal.Footer>
    </form>
    </Modal.Body>
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

