import React, { useContext } from "react";
import { ProductsData } from "../../data/ProductsData";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import { WishlistContext } from "../../context/context";
import { toast,ToastContainer } from "react-toastify";

const Products = () => {
  const { wishlistState, wishlistDispatch } = useContext(WishlistContext);

  const handleAddToWishlist = (product) => {
    wishlistDispatch({ type: 'ADD_TO_WISHLIST', payload: product });
    toast("Product added to wishlist");
    console.log("Add to Wishlist:", product.title);
  }

  const AddToWishlist = ({product}) => {
    return (
      <Button variant="primary" size="sm" onClick={() => handleAddToWishlist(product)}>Add to Wishlist</Button>
    )
  }
  return (
    <Container className="mt-4">
      {/* <pre>{JSON.stringify(wishlistState,null,2)}</pre> */}
      <Row>
        {ProductsData.map((product) => (
          <Col key={product.id} md={4} sm={6} xs={12} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={product.thumbnail}
                alt={product.title}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  <strong>Price:</strong> ${product.price} <br />
                  <strong>Category:</strong> {product.category} <br />
                  {/* <strong>Description:</strong> {product.description} */}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-evenly">
                {/* <Button variant="primary" size="sm" onClick={() => handleAddToWishlist(product)}>Add to Wishlist</Button> */}
                <AddToWishlist product={product}/>
                <Button variant="primary" size="sm" >Add to Card</Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
      <ToastContainer/>
    </Container>
  );
};

export default Products;
