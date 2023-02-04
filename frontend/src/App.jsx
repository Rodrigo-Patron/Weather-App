import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import "./App.css";
import { useRef, useState } from "react";

const App = () => {
  const cityInputValue = useRef();

  const [weather, setWeather] = useState();

  const submitHandler = () => {
    const city = { city: cityInputValue.current.value };

    const config = {
      method: "POST",
      body: JSON.stringify(city),
      headers: {
        "Content-type": "application/json",
      },
    };

    fetch("http://localhost:8002/weather", config)
      .then((response) => response.json())
      .then((result) => setWeather(result));
  };

  return (
    <div className="App">
      <div className="form">
        <Form.Control
          type="text"
          ref={cityInputValue}
          placeholder="Search City"
        />
        <Button onClick={submitHandler}>Submit</Button>
      </div>

      <div className="output">
        {weather && (
          <h4>
            The current temperature of {weather.name}, {weather.country} is:
            <br />
            <span>{weather.temperature}°C</span>
          </h4>
        )}
      </div>
    </div>
  );
};

export default App;
