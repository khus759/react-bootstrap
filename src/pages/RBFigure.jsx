import { Container, Figure } from "react-bootstrap";
import reactImage from "../assets/images/figure.png"; 

export default function RBFigure() {
  return (
    <Container className="my-4">
      <h4>Figure</h4>
      <Figure>
        <Figure.Image
          alt="React Features Diagram"
          src={reactImage}
        />
        <Figure.Caption >
         <p className="h5">Image Resource: Google.com</p> 
        </Figure.Caption>
      </Figure>
    </Container>
  );
}
