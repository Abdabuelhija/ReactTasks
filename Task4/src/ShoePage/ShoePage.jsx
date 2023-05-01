import React, { useState } from 'react';
import './ShoeStyle.css';
import { Modal, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faShekelSign } from '@fortawesome/free-solid-svg-icons';


export default function ShoePage() {
  const [show2, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  return (
    <>
    <Modal show={show2} onHide={handleClose} animation={false} style={{borderRadius:'1px'}}>
        <Modal.Header closeButton>
          <Modal.Title>Add Shoe</Modal.Title>
        </Modal.Header>
        <Modal.Body>Here Form</Modal.Body>
        <Modal.Footer>
          <Button  onClick={handleClose}>
            Close
          </Button>
          <Button  onClick={handleClose}>Add Shoe</Button>
        </Modal.Footer>
      </Modal>



      <h1>Nike Air Force</h1>
      <div className="Profile-body">
    <div className="images">
      <div className="insideImagesDiv">
        <img className='Profileimg' src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3cc96f43-47b6-43cb-951d-d8f73bb2f912/air-force-1-07-shoes-rWtqPn.png"/>
        <img className='Profileimg' src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/33533fe2-1157-4001-896e-1803b30659c8/air-force-1-07-shoes-rWtqPn.png"/>
      </div>
    </div>
    <div className="informations">
      <div className="Data">
      <span><b>Color : </b>White</span><br/>
      <span><b> Sizes:</b> 41-46</span><br/>
      <span><b> Price:</b> 250 <FontAwesomeIcon icon={faShekelSign} size="xs" /></span><br/>
        <br/>
        <div className='Buttons'>
      <button className="Delete-button" onClick={handleShow}><FontAwesomeIcon icon={faTrash} style={{color: "#ffffff",}} /> Delete</button>
      <button className="Update-button" onClick={handleShow}><FontAwesomeIcon icon={faPenToSquare} style={{color: "#ffffff",}} /> Update</button>
      </div>
      </div>
    </div>
  </div>
    </>
  );
}
