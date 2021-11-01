import React from "react";
import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
//import { Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
function FoodCards() {
  return (
    <>
      <Container>
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col md={3}>
              <Card className="mb-3">
                <Card.Img
                  variant="top"
                  src="https://media.discordapp.net/attachments/878051881396625471/903411580279074816/unknown.png"
                />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>Eat eat eat eat eat eat eat eat eat</Card.Text>
                  <Card.Footer>Star Rating</Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col md={3}>
              <Card className="mb-3">
                <Card.Img
                  variant="top"
                  src="https://preview.redd.it/4vlc3z9aiu921.jpg?auto=webp&s=3f1d8b1e70abff7989ab5c7762a5f5b0e09c34c8"
                />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>Eat eat eat eat eat eat eat eat eat</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default FoodCards;
