import { Container, Row, Col, Accordion, ListGroup, Card ,Badge} from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import { NavigationData } from "../data/NavigationData";
import { ArrowRight } from "react-bootstrap-icons";
import ScrollToTop from "../components/ScrollToTop";
import { WishlistContext } from "../context/context";
import React, { useContext } from "react";  


const RootLayout = () => {
  const {wishlistState} = useContext (WishlistContext);
  return (
    <Container className="bg-light">
      <h1 className="my-3">React Bootstrap Components</h1>
      <Row>
        <Col className="sidebar-col card" md={3} lg={3}>
          <p className="btn px-4 btn-primary">Bootstrap Components</p>

          <Accordion defaultActiveKey="0" alwaysOpen>
            {NavigationData.map((group, index) => (
              <Accordion.Item eventKey={index.toString()} key={group.id}>
                <Accordion.Header>{group.menuName}</Accordion.Header>
                <Accordion.Body>
                  <ListGroup variant="flush">
                    {group.children.map((item) => (
                      <ListGroup.Item key={item.id}>
                        <ArrowRight size={16} className="me-2" />
                        <NavLink
                          to={item.link}
                          style={{ textDecoration: "none" }}
                        >
                          {item.menuName}
                        </NavLink>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>

        <Col className="content-col card" md={8} lg={8}>
          <Card className="p-3" style={{ minHeight: "500px" }}>
            <div className="text-end">
              <NavLink to={"/wishlist"} className={"btn border p-1"}>Wishlist <Badge>{wishlistState?.wishlistItems?.length}</Badge></NavLink>
            </div>
            <hr />
            <Outlet />
          </Card>
        </Col>
      </Row>
      <ScrollToTop />
    </Container>
  );
};

export default RootLayout;