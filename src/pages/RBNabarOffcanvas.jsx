import { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Button,
  Offcanvas
} from "react-bootstrap";
import { GeoAltFill, EnvelopeFill, TelephoneFill } from "react-bootstrap-icons";

export default function RBNavbarOffcanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="light" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#">RB</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <NavDropdown title="Company" id="company-dropdown">
                <NavDropdown.Item href="#about">About Us</NavDropdown.Item>
                <NavDropdown.Item href="#team">Our Team</NavDropdown.Item>
                <NavDropdown.Item href="#infra">Infrastructure</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#testimonials">Testimonials</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <div className="d-flex gap-2">
              <Button variant="primary">Login</Button>
              <Button variant="outline-primary">Sign Up</Button>
              <Button variant="dark" onClick={handleShow}>
                Contact
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Offcanvas Contact */}
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Contact Us</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h5>We are here to help you!</h5>
          <hr />
          <p className="fw-bold mb-1">Indixpert</p>
          <p className="mb-1">
            <GeoAltFill className="me-2 text-primary" /> Our Offices :
          </p>
          <ul className="mb-3">
            <li>Hyderabad, Telangana, India</li>
            <li>Gurugram, Haryana, India</li>
          </ul>
          <p>
            <EnvelopeFill className="me-2 text-primary" /> Email:
            <br /> contact@indixpert.com
          </p>
          <p>
            <TelephoneFill className="me-2 text-primary" /> Phone:
            <br /> (+91) 778 899 2897
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
