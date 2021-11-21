import {
  Button,
  Row,
  Col,
  InputGroup,
  FormControl,
  Dropdown,
  DropdownButton,
} from "../../node_modules/react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import axios from "axios";

//import { usePlacesWidget } from "react-google-autocomplete";

import "./SearchBar.css";
import { useHistory } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

let autoComplete;

let nearbyRestaurants;

const handlePlaceSelect = async (updateQuery) => {
  const addressObject = autoComplete.getPlace();
  const query = addressObject.formatted_address;
  updateQuery(query);
  console.log(addressObject);
};

const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = () => {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

const handleScriptLoad = (updateQuery, autoCompleteRef) => {
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    {
      types: ["address"],
      componentRestrictions: { country: "us" },
      fields: ["address_components", "geometry"],
    }
  );
  autoComplete.setFields(["address_components", "formatted_address"]);
  autoComplete.addListener("place_changed", () =>
    handlePlaceSelect(updateQuery)
  );
};

const SearchBar = ({ setRestaurants }) => {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);

  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [status, setStatus] = useState("Address");
  const [userLocation, setUserLocation] = useState("");

  let restaurantResults = [];

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=AIzaSyB1q8elwYtcDQ8JUHMweywLu471QOoccy0&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []);

  useEffect(() => {
    let config = {
      method: "post",
      url: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=AIzaSyB1q8elwYtcDQ8JUHMweywLu471QOoccy0\n`,
      headers: {},
    };

    if (lat !== null && long !== null) {
      axios(config)
        .then(function (response) {
          setUserLocation(
            JSON.stringify(response.data.results[0].formatted_address)
          );

          setQuery(JSON.stringify(response.data.results[0].formatted_address));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [lat, long]);

  let history = useHistory();

  const handleClick = () => {
    let userLocation = new window.google.maps.LatLng(lat, long);

    var request = {
      location: userLocation,
      type: ["restaurant"],
      rankBy: window.google.maps.places.RankBy.DISTANCE,
    };

    nearbyRestaurants = new window.google.maps.places.PlacesService(
      document.createElement("div")
    );
    nearbyRestaurants.nearbySearch(request, callback);
  };

  function callback(results, status) {
    if (status === window.google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        restaurantResults[i] = results[i];
        //console.log(restaurantResults[i]);
      }

      // var distanceBetween =
      //   google.maps.geometry.spherical.computeDistanceBetween(
      //     userLocation,
      //     cafeLocation
      //   );
    }

    //console.log(restaurantResults);
    setRestaurants(restaurantResults);
    history.push("/main-page");
  }

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleUserLocation = () => {
    if (!navigator.geolocation) {
      setStatus(
        "Geolocation is not supported by your browser. Please enter your address manually."
      );
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        },
        () => {
          setStatus(
            "Unable to retrieve your location. Please enter your address manually."
          );
        }
      );
    }
  };

  return (
    <Row className="search-bar">
      <Col className="col-6">
        <InputGroup>
          <FormControl
            placeholder={status}
            aria-label="address"
            aria-describedby="user-address"
            className="address-input-box"
            ref={autoCompleteRef}
            onChange={handleChange}
            value={query}
          />
          <Button
            onClick={handleUserLocation}
            variant="primary"
            id="user-location-btn"
          >
            <i className="bi bi-geo-alt-fill"></i>
          </Button>
        </InputGroup>
      </Col>

      <Col className="col-2">
        <DropdownButton
          variant="outline-secondary"
          title="Distance"
          id="distance-dropdown"
        >
          <Dropdown.Item href="#">1 km</Dropdown.Item>
          <Dropdown.Item href="#">5km</Dropdown.Item>
          <Dropdown.Item href="#">10km</Dropdown.Item>
          <Dropdown.Item href="#">20km</Dropdown.Item>
        </DropdownButton>
      </Col>

      <Col className="col-2">
        <DropdownButton
          variant="outline-secondary"
          title="Price Range"
          id="price-range-dropdown"
        >
          <Dropdown.Item href="#">$</Dropdown.Item>
          <Dropdown.Item href="#">$$</Dropdown.Item>
          <Dropdown.Item href="#">$$$</Dropdown.Item>
          <Dropdown.Item href="#">$$$$</Dropdown.Item>
        </DropdownButton>
      </Col>

      <Col className="d-flex justify-content-start align-items-center col-1">
        <Button onClick={handleClick} variant="primary" id="submit-btn">
          Submit
        </Button>
      </Col>
    </Row>
  );
};

export default SearchBar;
