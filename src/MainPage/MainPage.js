import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import FoodCards from "../components/FoodCards";
const MainPage = () => {
  return (
    <div className="container">
      <Header />
      <FoodCards />
      main page
    </div>
  );
};

export default MainPage;
