import express from "express";
import cors from "cors";
import weatherRouter from "./routes/weatherRouter.js";

const app = express();

app.use(express.json());
app.use(cors());

//

app.use("/weather", weatherRouter);

//

app.listen(8002, () => {
  console.log("Server is running on: http://localhost:8002");
});
