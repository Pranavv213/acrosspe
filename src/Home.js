import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import tagline from './images/tagline.png'
import illus1 from './images/illus1.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { signInWithGoogle } from "./firebase-config";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import './Home.css'

function Home() {
  return (
    <div>
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">AcrossPe</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Send Money</Nav.Link>
           
            <Nav.Link href="#action3" >
             Become an Operator
            </Nav.Link>
          </Nav>
          <Form className="d-flex">

            {localStorage.getItem('email')? <img style={{borderRadius:'50%',width:'3em'}} src={localStorage.getItem('profilePic')} ></img> :<Button variant="secondary" onClick={signInWithGoogle}>Login</Button>}
        
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div class="pay">
    <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> 
    <img src={tagline}></img>
    <br></br>  <br></br>
    <a href="upi://pay?pa=jhaj9104@okicici&am=100&cu=INR"> <Button variant='warning' style={{width:'20em',height:'4em',borderRadius:'10em',color:'darkblue'}}><b>Send Money</b></Button></a>

   
    <br></br>
    <img style={{width:'20em'}} src={illus1}></img>
    </div>
    </div>
  )
}

export default Home
