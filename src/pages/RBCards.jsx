import { Card, Button,  Row, Col } from 'react-bootstrap';
import { product } from '../data/CardsData';

export default function RBCards() {
  return (

      <Row className="g-2 pt-4">
        {product.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} >
            <Card className="">
              <Card.Title className='p-2 h6'>{product.title}</Card.Title>
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.title}
                style={{ height: '200px', objectFit: 'contain' }}
              />
              <Card.Body className='mt-2 bg-text-muted'>
                <Card.Text className='h7' >{product.description}</Card.Text>
                <div className="fw-bold">
                  {product.price}{' '}
                  <span className="text-muted text-decoration-line-through" style={{ fontSize: '0.85rem' }}>
                    {product.mrp}
                  </span>
                </div>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between">
                <Button variant="outline-primary">Add To Cart</Button>
                <Button variant="primary">Buy Now</Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>

  );
}
