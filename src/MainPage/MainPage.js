import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
//import FoodCards from "../components/FoodCards";
import FoodCard from "../components/FoodCard";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import "./MainPage.css";

function MainPage() {
  const cardInfo = [
    {
      image:
        "https://cdnimg.webstaurantstore.com/uploads/blog/2018/12/lighting.jpg",
      title: "Food1",
    },
    {
      image:
        "https://www.chasinglenscapes.com/wp-content/uploads/2020/06/food-photography-on-the-go-tips.jpg",
      title: "Food1",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfxy04JHldNIE9ouIuy0nroUtyTWDahXHhJw&usqp=CAU",
      title: "Food1",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0024/2810/8869/articles/Replica_Surfaces_backdrops_food_jewelry_photo_photography_-_1_1990c178-2571-48f9-84c2-d5ebaa995789_2048x.jpg?v=1574032657",
      title: "Food1",
    },
    {
      image:
        "https://cdnimg.webstaurantstore.com/uploads/blog/2018/12/lighting.jpg",
      title: "Food1",
    },
    {
      image:
        "https://cdnimg.webstaurantstore.com/uploads/blog/2018/12/lighting.jpg",
      title: "Food1",
    },
    {
      image:
        "https://cdnimg.webstaurantstore.com/uploads/blog/2018/12/lighting.jpg",
      title: "Food1",
    },
    {
      image:
        "https://cdnimg.webstaurantstore.com/uploads/blog/2018/12/lighting.jpg",
      title: "Food1",
    },
  ];

  return (
    <>
      <Header></Header>
      <Row xs={1} md={2} className="RowStyle">
        {cardInfo.map((cardInfo) => (
          <FoodCard title={cardInfo.title} image={cardInfo.image} />
        ))}
      </Row>
    </>
  );
}

export default MainPage;
