import React, { useState, useEffect } from 'react';
import './ShoeStyle.css';
import { Modal, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
// import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faShekelSign } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useParams } from 'react-router-dom';
export default function ShoePage() {
  const { id } = useParams();
  const [shoeData, setShoeData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://6451781fa3221969116410b1.mockapi.io/Shoes', {
          params: { ID: id },
        });
        setShoeData(response.data[0]); // assuming the API returns an array with one object matching the ID
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

    //for the input value
    const oldName=shoeData.Name
    const oldColor=shoeData.Color
    const oldPrice=shoeData.Price
    const oldSizes=shoeData.Sizes
    const oldImg1=shoeData.Img1
    const oldImg2=shoeData.Img2

  document.title=`Abeds Shoes - ${oldName}`;

{/* Update Modal */}
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

    const [Name, setName] = React.useState("");
    const [Color, setColor] = React.useState("");
    const [Price, setPrice] = React.useState("");
    const [Sizes, setSizes] = React.useState("");
    const [Img1, setImg1] = React.useState("");
    const [Img2, setImg2] = React.useState("");

    const handleSubmit1 = async (event) => {
      event.preventDefault();
      const updatedData = {
        Name: Name,
        Color:Color ,
        Price:Price ,
        Sizes:Sizes ,
        Img1:Img1 ,
        Img2:Img2 
      };
      try {
        await axios.put(`https://6451781fa3221969116410b1.mockapi.io/Shoes/${shoeData.ID}`,updatedData);
        alert("The Changes were successfully saved");
        setShow1(false);
        window.location.reload();
      } catch (error) {
        console.log(error);
        alert("Error");
      }
    }
      
    

  {/* Delete Modal */}
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleSubmit2 = (event) => {
    event.preventDefault();
    alert("The Changes were successfully savedssss");
    setShow2(false);
  };

  function deleteShoe(){
    // Delete the Shoe here
    const handleDelete = async () => {
      try {
        await axios.delete(`https://6451781fa3221969116410b1.mockapi.io/Shoes/${shoeData.ID}`);
        alert("The Changes were successfully saved");
        window.location.href = "../ShoesPage";
      } catch (error) {
        console.log(error);
        alert("Error");
      }
    };
    handleDelete();
  }


  return (
    <>
    {/* Update Modal */} 
       <Modal show={show1} onHide={handleClose1} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title><br/><h2>Update Informations</h2></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form class="row" onSubmit={handleSubmit1}>
      <div class="form-group col-md-6">
      <label for="inputEmail4">Name</label>
        <input type="text" class="form-control" id="inputName"  placeholder={oldName} onChange={(event) => setName(event.target.value)} required/>
      </div>
      <div class="form-group col-md-6">
      <label for="inputEmail4">Color</label>
        <input type="text" class="form-control" id="inputColor" placeholder={oldColor} onChange={(event) => setColor(event.target.value)} required/>
      </div>
      <div class="form-group col-md-6">
        <label for="inputEmail4">Price</label>
        <input type="number" class="form-control" id="inputPrice"   placeholder={oldPrice} onChange={(event) => setPrice(event.target.value)} required/>
      </div>
      <div class="form-group col-md-6">
        <label for="inputPassword4">Sizes</label>
        <input type="text" class="form-control" id="inputSizes"  placeholder={oldSizes} onChange={(event) => setSizes(event.target.value)} required/>
      </div>
      <div class="form-group col-md-12">
        <label for="inputAddress">image1 url</label>
        <input type="text" class="form-control" id="Img1"   placeholder={oldImg1} onChange={(event) => setImg1(event.target.value)} required/>
      </div>
      <div class="form-group col-md-12">
        <label for="inputAddress">image2 url</label>
        <input type="text" class="form-control" id="Img2"  placeholder={oldImg2} onChange={(event) => setImg2(event.target.value)} required/>
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
          <Button variant="primary" onClick={deleteShoe} style={{'--bs-btn-bg':'red','--bs-btn-hover-bg':'red','--bs-btn-border-color':'red'}}>Delete</Button>
        </Modal.Footer>
      </Modal>


      <h1>{shoeData.Name}</h1>
      <div className="Profile-body">
    <div className="images">
      <div className="insideImagesDiv">
        <img className='Profileimg' src={shoeData.Img1}/>
        <img className='Profileimg' src={shoeData.Img2}/>
      </div>
    </div>
    <div className="informations">
      <div className="Data">
      <span><b>Color : </b>{shoeData.Color}</span><br/>
      <span><b> Sizes:</b> {shoeData.Sizes}</span><br/>
      <span><b> Price:</b> {shoeData.Price}<FontAwesomeIcon icon={faShekelSign} size="xs" /></span><br/>
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
