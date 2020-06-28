import React from 'react';
import './App.css';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aboutus from './aboutus';
import Mentalillness from './mentalillness';

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" id="poppingNavbar" >
        {/* <Navbar.Brand href="#home">Beyond Stigma</Navbar.Brand> */}
          <Navbar.Brand href="#home">
          <img
            alt="company logo"
            src={require("./logo.svg")}
            width="100"
            height="100"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ml-auto">          

            {/* About us dropdown */}
            <NavDropdown title="About us" id="basic-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1">Mission</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Vision</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Add third thing</NavDropdown.Item>
            </NavDropdown>


            {/* Blogs dropdown */}
            <NavDropdown title="Blogs" id="basic-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1">Mood boosters</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">High schoolers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Thing 3</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Thing 4</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
            </NavDropdown>


            <Nav.Link href="#home">Contact Us</Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </Navbar>


      <div class="remove">
        REMOVE THIS. Fill with padding
      </div>
      <Aboutus />
      <Mentalillness />

    </div>
  );
}

export default App;