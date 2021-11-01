import { Container } from "../../node_modules/react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import "./LandingPage.css";

const LandingPage = () => {
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
