import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">Foodio</Navbar.Brand>
        <Nav className="me-auto">
          {/* <Nav.Link href="/">Landing Page</Nav.Link> */}
          <Nav.Link href="/main-page">Main Page</Nav.Link>
          {/* <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/how-to">How To Use Foodio</Nav.Link>
          <Nav.Link href="/user-acc-page">User Page</Nav.Link>
          <Nav.Link href="/login-page"> Login page</Nav.Link> */}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
