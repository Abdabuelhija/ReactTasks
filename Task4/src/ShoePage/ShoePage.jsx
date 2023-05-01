import React, { useState } from 'react';
import './ShoeStyle.css';
import { Modal, Button } from 'react-bootstrap';
// import { Link, NavLink } from 'react-router-dom';
// import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faShekelSign } from '@fortawesome/free-solid-svg-icons';


export default function ShoePage() {
  document.title="Abeds Shoes - Profile";

{/* Update Modal */}
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  {/* Delete Modal */}
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  return (
    <>
    {/* Update Modal */} 
       <Modal show={show1} onHide={handleClose1} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title><br/><h2>Update Informations</h2></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form class="row">
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
        <Button variant="secondary" onClick={handleClose1}>Close</Button>
        <Button variant="primary"  type="submit" style={{'--bs-btn-bg': '#1C5F8C','--bs-btn-hover-bg':'#1C5F8C','--bs-btn-border-color': '#1C5F8C'}} >Update</Button>
      </Modal.Footer>
    </form>
    </Modal.Body>
  </Modal>

    {/* Delete Modal */}
      <Modal show={show2} onHide={handleClose2} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Informations</Modal.Title>
        </Modal.Header>
        <Modal.Body><h5>Are you sure you want to delete? This action cannot be undone. Continuing with this action will permanently remove the selected item(s).
           Please note that our privacy policy does not cover the retrieval of deleted data</h5></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose2} style={{'--bs-btn-bg':'red','--bs-btn-hover-bg':'red','--bs-btn-border-color':'red'}}>Delete</Button>
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
      <button className="Delete-button" onClick={handleShow2}><FontAwesomeIcon icon={faTrash} style={{color: "#ffffff",}} /> Delete</button>
      <button className="Update-button" onClick={handleShow1}><FontAwesomeIcon icon={faPenToSquare} style={{color: "#ffffff",}} /> Update</button>
      </div>
      </div>
    </div>
  </div>
    </>
  );
}
