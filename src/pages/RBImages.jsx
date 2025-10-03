
import { Container, Row, Col, Image } from "react-bootstrap";
import avatarImg from "../assets/images/happy-customer-1.svg";
import avatarImg2 from "../assets/images/happy-customer-4.svg";

export default function RBImages() {
  const avatarUrl = avatarImg; 
  const avatarUrl2 = avatarImg2; 

  return (
    <Container className="my-4">
      <Row className="text-center justify-content-evenly">

        <Col xs={12} md={6} lg={4}>
          <h4>Avatar With Name</h4>
          <div className="d-flex align-items-center mb-2">
            <Image src={avatarUrl2} roundedCircle className="me-2" />
            <span>Radhika Parmar</span>
          </div>
          <div className="d-flex align-items-center">
            <Image src={avatarUrl} roundedCircle className="me-2" />
            <span>Rajkumar Jadeja</span>
          </div>
        </Col>

        <Col xs={12} md={6} lg={5}>
          <h4>Avatar Sizes</h4>
          {[30, 40, 50, 60, 70].map((size, idx) => (
            <Image
              key={idx}
              src={avatarUrl}
              roundedCircle
              width={size}
              height={size}
              className="me-1"
            />
          ))}
        </Col>

<Col xs={12} md={6} lg={3}>
  <h6>Avatar Group</h6>
  <div className="d-flex align-iteams-left" style={{ position: "relative",  }}>
    {[...Array(5)].map((_, idx) => (
      <Image
        key={idx}
        src={avatarUrl}
        roundedCircle
        width={40}
        height={40}
        style={{
          position: "absolute",
          left: `${idx * 20}px`, 
          zIndex: 5 - idx 
        }}
      />
    ))}
  </div>
</Col>
      </Row>
    </Container>
  );
}
