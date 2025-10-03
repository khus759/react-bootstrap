import { useState } from "react";
import { Button, ProgressBar, Card, Badge } from "react-bootstrap";

export default function RBPrgressBars() {
  const [progress, setProgress] = useState(5);

  const increaseProgress = () => {
    setProgress((prev) => Math.min(prev + 5, 100));
  };

  const decreaseProgress = () => {
    setProgress((prev) => Math.max(prev - 5, 5));
  };

  return (
    <div className="p-3">
      <div className="mb-3">
        <Button variant="primary" className="me-2" onClick={increaseProgress}>
          Progress + 5%
        </Button>
        <Button variant="primary" onClick={decreaseProgress}>
          Progress - 5%
        </Button>
      </div>

      <p>Completed {progress}%</p>
      <ProgressBar now={progress} label={`${progress}%`} variant="success" className="mb-2" />
      <ProgressBar now={progress} variant="danger" className="mb-4" />

      <hr />

      <Card style={{ width: "22rem" }}>
        <Card.Body>
          <Card.Title>Bootstrap Dashboard Application</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Web Development</Card.Subtitle>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Card.Text>
          <Badge bg="info">In Progress</Badge>
          <ProgressBar now={progress} label={`${progress}%`} className="mt-2" />
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <small>Due Date: 1 Jan, 2022</small>
          <small>Budget: $123,000</small>
        </Card.Footer>
      </Card>
    </div>
  );
}
