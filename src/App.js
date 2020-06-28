import React from 'react';
import './App.css';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" >
        {/* <Navbar.Brand href="#home">Beyond Stigma</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="mr-auto">            

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
            </NavDropdown>


            <Nav.Link href="#home">Contact Us</Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </Navbar>


      <div>
        
      </div>


    </div>
  );
}

export default App;


{/* <NavDropdown.Divider /> */}
