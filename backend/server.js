import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

//

app.post("/weather", (req, res) => {
  const config = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "faee281113msh4e40724303c0bf2p171e01jsn2cb8e18b328a",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  fetch(
    `https://weatherapi-com.p.rapidapi.com/current.json?q=%3C${req.body.city}%3E`,
    config
  )
    .then((res) => res.json())
    .then((result) =>
      res.send({
        city: req.body.city,
        temperature: result.current.temp_c,
      })
    )
    .catch((err) => console.error("error:" + err));
});

app.listen(8002, () => {
  console.log("Server is running on: http://localhost:8002");
});
