import React, { useState } from 'react';
import { Container, Table, Pagination } from 'react-bootstrap';
import { CommentsData } from '../data/CommentsData';
import usePagination from '../hooks/usePagination';

const RBPagination = () => {
  const [page, setPage] = useState(1);
  const limit = 5;

  const {
    totalPages,
    getData,
    getPaginationArray,
    getShowingInfo,
  } = usePagination(CommentsData, page, limit);

  const currentData = getData();
  const paginationRange = getPaginationArray();
  const showingText = getShowingInfo();

  return (
    <Container>
      <h4>Pagination</h4>
      <p>{showingText}</p>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Post ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.postId}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination>
        <Pagination.First onClick={() => setPage(1)} disabled={page === 1} />
        <Pagination.Prev onClick={() => setPage(page - 1)} disabled={page === 1} />

        {paginationRange.map((p, i) => (
          <Pagination.Item
            key={i}
            active={p === page}
            onClick={() => typeof p === 'number' && setPage(p)}
            disabled={p === '...'}
          >
            {p}
          </Pagination.Item>
        ))}

        <Pagination.Next onClick={() => setPage(page + 1)} disabled={page === totalPages} />
        <Pagination.Last onClick={() => setPage(totalPages)} disabled={page === totalPages} />
      </Pagination>
    </Container>
  );
};

export default RBPagination;