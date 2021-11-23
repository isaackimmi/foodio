import React from "react";
import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import "./FoodCard.css";
function FoodCard(props) {
  const starRating = (rating) => {
    let starArray = [];
    for (let index = 0; index < rating; index++) {
      starArray.push(<i class="bi bi-star-fill"></i>);
    }
    return starArray;
  };

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
            {/* <Card.Img
              className="starStyle"
              variant="bottom"
              src="https://static.vecteezy.com/system/resources/thumbnails/002/450/568/small/five-stars-rating-icon-vector.jpg"
            /> */}
            {starRating(props.rating)}
            <span className="textStyle">{props.distance} miles</span>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default FoodCard;
