import React from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';
import { Folder, FileCode } from 'react-bootstrap-icons';

// Custom link component for breadcrumb
const CustomLink = ({ href, children }) => {
  return <a href={href} className="text-decoration-none">{children}</a>;
};

export default function RBBreadCrumbs() {
  return (
    <Container className="my-5">
      <h3>Breadcrumbs</h3>

      <Breadcrumb className="mb-4">
        <Breadcrumb.Item linkAs={CustomLink} href="#">Cloud</Breadcrumb.Item>
        <Breadcrumb.Item linkAs={CustomLink} href="#">Files</Breadcrumb.Item>
        <Breadcrumb.Item linkAs={CustomLink} href="#">Project</Breadcrumb.Item>
        <Breadcrumb.Item active>ProjectName</Breadcrumb.Item>
      </Breadcrumb>

      <h5 className="text-info fw-semibold">Optional - Additional Example</h5>

      <Breadcrumb>
        <Breadcrumb.Item linkAs={CustomLink} href="#">
          <Folder className="me-1 text-warning" /> Assignments
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={CustomLink} href="#">
          <Folder className="me-1 text-warning" /> Project
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          <FileCode className="me-1 text-primary" /> TodoList
        </Breadcrumb.Item>
      </Breadcrumb>
    </Container>
  );
}
