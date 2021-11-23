import React from "react";
import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import "./FoodCard.css";
function FoodCard(props) {
  return (
    <>
      <Card className="CardStyle">
        <Card.Img src={props.image} className="imageStyle" />

        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          {/* <Button className="foodTagStyle">{props.tag}</Button> */}
          <Card.Text>
            <i className="bi bi-geo-alt-fill"></i>
            <a
              href={props.restaurantID}
              className="addressStyle"
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.address}
            </a>
          </Card.Text>
          <div>
            <i className="bi bi-star-fill starRating"></i>
            {props.rating}
            <span className="textStyle">{props.distance} miles</span>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default FoodCard;
