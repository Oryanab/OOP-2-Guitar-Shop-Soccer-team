const express = require("express");
const teamRouter = require("./routes/soccerteam");
const managerRouter = require("./routes/manager");
const app = express();
const cors = require("cors");
const port = 8080;

app.get("/", (req, res) => {
  res.send("hllow");
});

app.use(express.json());
app.use(cors());

app.use("/manager", managerRouter);
app.use("/team", teamRouter);
app.listen(port);
