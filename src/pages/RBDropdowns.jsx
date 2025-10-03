import { Row, Col, Dropdown, ButtonGroup, Image } from "react-bootstrap";
import {
  PersonFill,
  Grid3x3GapFill,
  BellFill,
  GearFill,
  BoxArrowRight,
} from "react-bootstrap-icons";
import avatarImg from "../assets/images/happy-customer-1.svg";



export default function RBDropdowns() {
  return (
    <Row className="my-4 g-4 align-items-center">
      <Col md="4" className="text-center">
        <Dropdown as={ButtonGroup}>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            <PersonFill className="me-2" /> Profile
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/dashboard">
              <Grid3x3GapFill className="me-2" /> Dashboard
            </Dropdown.Item>
            <Dropdown.Item href="#/notifications">
              <BellFill className="me-2" /> Notification
            </Dropdown.Item>
            <Dropdown.Item href="#/settings">
              <GearFill className="me-2" /> Settings
            </Dropdown.Item>
            <Dropdown.Item href="#/logout">
              <BoxArrowRight className="me-2" /> Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>

      <Col md="4" className="text-center">
        <Dropdown as={ButtonGroup}>
          <Dropdown.Toggle variant="outline-primary" id="dropdown-outline">
            <PersonFill className="me-2" /> Profile
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/dashboard">
              <Grid3x3GapFill className="me-2" /> Dashboard
            </Dropdown.Item>
            <Dropdown.Item href="#/notifications">
              <BellFill className="me-2" /> Notification
            </Dropdown.Item>
            <Dropdown.Item href="#/settings">
              <GearFill className="me-2" /> Settings
            </Dropdown.Item>
            <Dropdown.Item href="#/logout">
              <BoxArrowRight className="me-2" /> Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>

      <Col md="4" className="text-center">
        <Dropdown align="end">
          <Dropdown.Toggle
            id="dropdown-avatar"
            className="avatar-toggle"
          >
            <Image
              src={avatarImg}
            />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/dashboard">
              <Grid3x3GapFill className="me-2" /> Dashboard
            </Dropdown.Item>
            <Dropdown.Item href="#/notifications">
              <BellFill className="me-2" /> Notification
            </Dropdown.Item>
            <Dropdown.Item href="#/settings">
              <GearFill className="me-2" /> Settings
            </Dropdown.Item>
            <Dropdown.Item href="#/logout">
              <BoxArrowRight className="me-2" /> Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
    </Row>
  );
}
