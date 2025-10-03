import { useState } from "react";
import { Accordion, useAccordionButton } from "react-bootstrap";
import { PlusCircle, DashCircle } from "react-bootstrap-icons";

function CustomToggle({ children, eventKey }) {
  const [isOpen, setIsOpen] = useState(false);

  const decoratedOnClick = useAccordionButton(eventKey, () => {
    setIsOpen(!isOpen);
  });

  return (
    <div
      onClick={decoratedOnClick}
      className="d-flex justify-content-between align-items-center w-100"
      style={{ cursor: "pointer" }}
    >
      <span className="fw-bold text-primary">{children}</span>
      {isOpen ? <DashCircle /> : <PlusCircle />}
    </div>
  );
}

export default function RBAccordion() {
  return (
    <div className="my-4">
      <Accordion defaultActiveKey="0" alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header as="div">
            <CustomToggle eventKey="0">
              What is the cost of an online course ?
            </CustomToggle>
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            commodo hendrerit interdum. Pellentesque id elit ac lorem feugiat
            congue. Nam odio leo, viverra vitae libero quis, porttitor egestas ex.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header as="div">
            <CustomToggle eventKey="1">
              Do I need to visit any physical location?
            </CustomToggle>
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            commodo hendrerit interdum. Pellentesque id elit ac lorem feugiat
            congue. Nam odio leo, viverra vitae libero quis, porttitor egestas ex.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header as="div">
            <CustomToggle eventKey="2">
              What are the technology requirements?
            </CustomToggle>
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            commodo hendrerit interdum. Pellentesque id elit ac lorem feugiat
            congue. Nam odio leo, viverra vitae libero quis, porttitor egestas ex.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header as="div">
            <CustomToggle eventKey="3">
              How can I ask questions or clear doubts?
            </CustomToggle>
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            commodo hendrerit interdum. Pellentesque id elit ac lorem feugiat
            congue. Nam odio leo, viverra vitae libero quis, porttitor egestas ex.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
