import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { EnvelopeFill } from "react-bootstrap-icons";

export default function RBModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="w-25">
        <EnvelopeFill className="me-2" /> Subscribe
      </Button>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="text-center">
          <h4 className="fw-bold">Don't miss out</h4>
          <p className="text-muted">
            Signup for our newsletter to stay up to date.
          </p>
          <Form className="d-flex">
            <Form.Control
              type="email"
              placeholder="Enter your email address"
              className="me-2"
            />
            <Button variant="secondary">Subscribe</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
