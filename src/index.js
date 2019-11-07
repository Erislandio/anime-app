const express = require("express");
const app = express();
const port = 8000;
const routes = require("./routes/routes");
require("./database/db");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, () => {
  console.log("Running");
});
