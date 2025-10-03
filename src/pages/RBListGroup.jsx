import React from "react";
import { ListGroup, Card } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function RBListGroup() {
  const socialMedia = [
    { name: "Facebook", icon: <FaFacebook color="#1877F2" />, traffic: "20%" },
    { name: "Instagram", icon: <FaInstagram color="#1877F2" />, traffic: "20%" },
    { name: "YouTube", icon: <FaYoutube color="#1877F2" />, traffic: "20%" },
    { name: "TwitterX", icon: <FaTwitter color="#1877F2" />, traffic: "20%" },
    { name: "LinkedIn", icon: <FaLinkedin color="#1877F2" />, traffic: "20%" },
  ];

  return (
    <Card className="my-4 shadow-sm w-50 fw-bold">
      <Card.Body>
        <h4 className="mb-3">Social Media Traffic</h4>
        <ListGroup variant="flush">
          {socialMedia.map((item, index) => (
            <ListGroup.Item
              key={index}
              className="d-flex justify-content-between align-items-center"
            >
              <span className="d-flex align-items-center gap-2">
                {item.icon} {item.name}
              </span>
              <span>{item.traffic}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
