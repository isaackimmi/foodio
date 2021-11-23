import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
//import FoodCards from './components/FoodCards'
import FoodCard from "../components/FoodCard";

import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import "./MainPage.css";
import "../components/FoodCard.css";

function MainPage({ restaurantArr, setRestaurantArr }) {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    setRestaurants([...restaurantArr]);
  }, [restaurantArr]);

  const cardInfo = [
    {
      image:
        "https://cdnimg.webstaurantstore.com/uploads/blog/2018/12/lighting.jpg",
      title: "Food1",
      distance: "1 mi",
      tag: "Cafe",
    },
    {
      image:
        "https://www.chasinglenscapes.com/wp-content/uploads/2020/06/food-photography-on-the-go-tips.jpg",
      title: "Food1",
      distance: "5 mi",
      tag: "Cafe",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfxy04JHldNIE9ouIuy0nroUtyTWDahXHhJw&usqp=CAU",
      title: "Food1",
      distance: "5 mi",
      tag: "Cafe",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0024/2810/8869/articles/Replica_Surfaces_backdrops_food_jewelry_photo_photography_-_1_1990c178-2571-48f9-84c2-d5ebaa995789_2048x.jpg?v=1574032657",
      title: "Food1",
      distance: "5 mi",
      tag: "Cafe",
    },
    {
      image:
        "https://cdnimg.webstaurantstore.com/uploads/blog/2018/12/lighting.jpg",
      title: "Food1",
      distance: "5 mi",
      tag: "Cafe",
    },
    {
      image:
        "https://cdnimg.webstaurantstore.com/uploads/blog/2018/12/lighting.jpg",
      title: "Food1",
      distance: "5 mi",
      tag: "Cafe",
    },
    {
      image:
        "https://cdnimg.webstaurantstore.com/uploads/blog/2018/12/lighting.jpg",
      title: "Food1",
      distance: "5 mi",
      tag: "Cafe",
    },
    {
      image:
        "https://cdnimg.webstaurantstore.com/uploads/blog/2018/12/lighting.jpg",
      title: "Food1",
      distance: "5 mi",
      tag: "Cafe",
    },
  ];

  const foodCardArr = restaurants.map((restaurantInfo) => {
    const restaurantID = "http://maps.google.com/?q=" + restaurantInfo.name;
    return (
      <FoodCard
        title={restaurantInfo.name}
        image={restaurantInfo.icon}
        distance={restaurantInfo.distance}
        address={restaurantInfo.vicinity}
        restaurantID={restaurantID}
        tag={restaurantInfo.tag}
        rating={restaurantInfo.rating}
        priceLevel={restaurantInfo.price_level}
      ></FoodCard>
    );
  });

  return (
    <>
      <Header></Header>
      <Container>
        <Row className="RowStyle" xs={1} md={6} lg={4}>
          {foodCardArr}
        </Row>
      </Container>
    </>
  );
}
//{cardInfo.map((cardInfo) => (<FoodCard title = {cardInfo.title} image = {cardInfo.image}/>))}

export default MainPage;
