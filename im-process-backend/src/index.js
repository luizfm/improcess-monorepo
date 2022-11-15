import express from "express";
import routes from "./shared/infra/http/routes/index.js";
import cors from "cors";
import { handleWhiteList } from "./utils/helpers.js";

const app = express();
app.use(express.json());

const corsOptions = {
  origin: handleWhiteList,
  optionsSuccessStatus: 200, // For legacy browser support
  methods: "GET, PUT, POST",
};

app.use(cors(corsOptions));

app.use(routes);

app.get("/", (request, response) => {
  response.send("hello world");
});

app.listen(3333, "0.0.0.0", () => {
  console.log("Server is running on port 3333!");
});
