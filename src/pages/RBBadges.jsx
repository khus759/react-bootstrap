import { Badge, Container, Table } from 'react-bootstrap';
import { employeeData } from '../data/TableData';

const getStatusVariant = (status) => {
  switch (status) {
    case 'PENDING': return 'primary';
    case 'NEGOTIATING': return 'warning';
    case 'FAILED': return 'danger';
    case 'PAID': return 'success';
    case 'OVERDUE': return 'danger';
    default: return 'secondary';
  }
};

const RBBadges = () => {
  return (
    <Container>
      <div className="p-1">
        <Table striped hover responsive>
          <thead >
            <tr>
              <th  className='text-muted'>Employee</th>
              <th  className='text-muted'>Department</th>
              <th  className='text-muted'>Salary</th>
              <th  className='text-muted'>Payment Date</th>
              <th  className='text-muted'>Payment Status</th>
              <th  className='text-muted'>Employment Status</th>
            </tr>
          </thead>
          <tbody>
            {employeeData.map((emp, idx) => (
              <tr key={idx}>
                <td>{emp.name}</td>
                <td>{emp.icon} {emp.department}</td>
                <td>{emp.salary}</td>
                <td>{emp.date}</td>
                <td>
                  <Badge bg={getStatusVariant(emp.status)}>{emp.status}</Badge>
                </td>
                <td>{emp.empType}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default RBBadges;