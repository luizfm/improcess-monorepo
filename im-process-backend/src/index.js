import express from "express";
import routes from "./shared/infra/http/routes/index.js";

const app = express();
app.use(express.json());
app.use(routes);

app.get("/", (request, response) => {
  response.send("hello world");
});

app.listen(3333, () => {
  console.log("Server is running on port 3333!");
});
