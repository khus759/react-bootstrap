import { useState } from "react";
import { Carousel, Button } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import caresoul1 from "../assets/images/caresoul-1.png";
import caresoul2 from "../assets/images/caresoul-2.png";
import caresoul3 from "../assets/images/caresoul-3.png";

export default function RBCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="my-4 text-center">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        indicators
        nextIcon={<ChevronRight size={30} className="text-primary" />}
        prevIcon={<ChevronLeft size={30} className="text-primary" />}
      >
        <Carousel.Item>
          <img className="d-block w-100 rounded" src={caresoul1} alt="First slide" />
          <Carousel.Caption>
            <h3>First Slide</h3>
            <p>This is the first slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 rounded" src={caresoul2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second Slide</h3>
            <p>This is the second slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 rounded" src={caresoul3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third Slide</h3>
            <p>This is the third slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="mt-3">
        <Button
          variant="primary"
          className="me-2"
          onClick={() => setIndex((index - 1 + 3) % 3)}
        >
          ← Prev
        </Button>
        <Button
          variant="primary"
          onClick={() => setIndex((index + 1) % 3)}
        >
          Next →
        </Button>
      </div>
    </div>
  );
}
