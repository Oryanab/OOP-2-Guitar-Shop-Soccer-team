"use strict";

const express = require("express");
const managerRouter = express.Router();
const soccerClass = require("./soccer_class");
const errorHandler = require("./middleware/middleware");
const fs = require("fs");
const path = require("path");

/*
    get database
*/
function returnDataBase() {
  let dataBase = fs.readFileSync(
    path.resolve(__dirname, "../../database.json")
  );
  let dataBaseJson = JSON.parse(dataBase.toString());
  return dataBaseJson;
}

/*
    save database
*/
function saveDataBase(dataBaseJson) {
  fs.writeFileSync("database.json", Buffer.from(JSON.stringify(dataBaseJson)));
}

/*
    get manager soccerteam
*/
managerRouter.get("/:manager", (req, res) => {
  try {
    res.json(returnDataBase()[req.params.manager]);
  } catch (e) {
    res.sendStatus(404, { err: "page not found" });
  }
});

/*
    add a manager 
*/
managerRouter.post("/add", (req, res) => {
  let dataBaseJson = returnDataBase();
  dataBaseJson[req.body.managername] = {};
  fs.writeFileSync("database.json", Buffer.from(JSON.stringify(dataBaseJson)));
  res.json(dataBaseJson);
});

managerRouter.use(errorHandler.checkValidManger);

/*
     remove a manager
*/
managerRouter.delete("/remove", (req, res) => {
  let dataBaseJson = returnDataBase();
  delete dataBaseJson[req.headers.managername];
  saveDataBase(dataBaseJson);
});

module.exports = managerRouter;
