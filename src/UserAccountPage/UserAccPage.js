import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Tab, Tabs } from "react-bootstrap";

function UserAccPage() {
  return (
    <>
      <Header />

      <Container>
        <Row className="auto">
          <Col xl="auto">
            <Card style={{ width: "50%", height: "30%" }}>
              <Card.Img
                variant="top"
                src="https://en.meming.world/images/en/thumb/e/e2/Crying_Cat_screaming.jpg/300px-Crying_Cat_screaming.jpg"
              />

              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Container>
            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="home" title="Favorite Restaurants"></Tab>
              <Tab eventKey="profile" title="Favorite Search Filters"></Tab>
              <Tab eventKey="contact" title="Recently Visited"></Tab>
            </Tabs>
          </Container>
        </Row>
      </Container>
    </>
  );
}
export default UserAccPage;
