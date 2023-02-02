import express from "express";

const weatherRouter = express.Router();

//

weatherRouter.post("/", (req, res) => {
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

export default weatherRouter;
