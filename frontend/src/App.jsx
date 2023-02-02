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
    <div>
      <input type="text" ref={cityInputValue} placeholder="Search City" />
      <button onClick={submitHandler}>Submit</button>

      {weather && (
        <h3>
          The current temperature of {weather.name}, {weather.country} is{" "}
          {weather.temperature}°C{" "}
        </h3>
      )}
    </div>
  );
};

export default App;
