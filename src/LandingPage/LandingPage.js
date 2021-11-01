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
import SearchBar from "../components/SearchBar";
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
        <SearchBar />
      </Container>
    </Container>
  );
};

export default LandingPage;
