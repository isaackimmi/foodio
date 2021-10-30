import {
  Button,
  Row,
  Col,
  FloatingLabel,
  Form,
  Container,
} from "../../node_modules/react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import "./LandingPage.css";
import { useHistory } from "react-router-dom";

const LandingPage = () => {
  let history = useHistory();

  const handleClick = () => {
    history.push("/main-page");
  };

  return (
    <Container>
      <Header />
      <Container className="landing-content d-flex justify-content-center align-items-center">
        <Row className="search-bar">
          <Col>
            <FloatingLabel controlId="floatingInputGrid" label="Address">
              <Form.Control type="email" />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel controlId="floatingInputGrid" label="Address">
              <Form.Control type="email" />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel controlId="floatingSelectGrid" label="Distance">
              <Form.Select aria-label="Floating label select example">
                <option value="1">1 mile</option>
                <option value="2">5 miles</option>
                <option value="3">10 miles</option>
                <option value="4">20 miles</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel controlId="floatingSelectGrid" label="Price">
              <Form.Select aria-label="Floating label select example">
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col className="d-flex justify-content-start align-items-center">
            <Button onClick={handleClick} variant="primary">
              Submit
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default LandingPage;
