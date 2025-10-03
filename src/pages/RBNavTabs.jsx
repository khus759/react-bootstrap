import { Tab, Nav } from "react-bootstrap";
import { Calendar3, Clock, CurrencyRupee } from "react-bootstrap-icons";

export default function RBNavTabs() {
  return (
    <Tab.Container defaultActiveKey="overview">
      {/* Tabs */}
      <Nav variant="tabs" className="mb-3 custom-tabs">
        <Nav.Item>
          <Nav.Link eventKey="overview">Overview</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="scope">Project Scope</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="team">Team Members</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tasks">Tasks</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="chat">Chat</Nav.Link>
        </Nav.Item>
      </Nav>

      {/* Tab Content */}
      <Tab.Content>
        <Tab.Pane eventKey="overview">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus
            tellus, ultricies quis orci ac, volutpat rhoncus lacus. Sed tempor
            arcu vitae neque mollis rutrum ac a odio. Donec sit amet ex in est
            dictum imperdiet.
          </p>

          <ul className="list-unstyled">
            <li className="mb-2 border-bottom pb-2">
              <Calendar3 className="me-2 text-primary" /> <strong>Start Date</strong>
              <span className="float-end">01 Jul, 2025</span>
            </li>
            <li className="mb-2 border-bottom pb-2">
              <Calendar3 className="me-2 text-primary" /> <strong>End Date</strong>
              <span className="float-end">31 Dec, 2025</span>
            </li>
            <li className="mb-2 border-bottom pb-2">
              <Clock className="me-2 text-primary" /> <strong>Estimate Time</strong>
              <span className="float-end">5 Months</span>
            </li>
            <li className="pb-2">
              <CurrencyRupee className="me-2 text-primary" />{" "}
              <strong>Estimate Cost</strong>
              <span className="float-end">₹ 5,80,000</span>
            </li>
          </ul>
        </Tab.Pane>

        <Tab.Pane eventKey="scope">Project Scope content...</Tab.Pane>
        <Tab.Pane eventKey="team">Team Members content...</Tab.Pane>
        <Tab.Pane eventKey="tasks">Tasks content...</Tab.Pane>
        <Tab.Pane eventKey="chat">Chat content...</Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
}
