const express = require("express");
const app = express();
const port = 8000;
const routes = require("./routes/routes");
require("./database/db");

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log("Running");
});
