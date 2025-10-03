import React from "react";
import { BlogPostData } from "../../data/BlogPostData";
import { Container, Row, Col, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const BlogListing = () => {
    return (
        <Container>
            <Row>
                {BlogPostData.map((blog) => {
                    return (
                        <Col md={4} key={blog.id}>
                            <Card>
                                <Card.Img variant="top" src={blog.imgage} />
                                <Card.Body>
                                    <Card.Title>{blog.title}</Card.Title>
                                    {/* {blog.slug} */}
                                    <NavLink to={`/blog/ ${blog.id}`}>Read More</NavLink>
                                    {/* <NavLink to={`/blog/ ${blog.id}/${blog.slug}`}>Read More</NavLink> */}

                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default BlogListing;
