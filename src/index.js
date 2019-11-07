const express = require("express");
const app = express();
const port = 8000;
const routes = require("./routes/routes");
const cors = require("cors");
const morgan = require("morgan");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(morgan());
app.use(routes);

app.listen(port, () => {
  console.log("Running");
  require("./database/db");
});
