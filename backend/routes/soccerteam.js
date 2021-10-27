"use strict";

const express = require("express");
const requestRoutes = express.Router();
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
    get soccer team at url: /user
*/
requestRoutes.get("/", (req, res) => {
  try {
    res.json(returnDataBase());
  } catch (e) {
    res.sendStatus(404, { err: "page not found" });
  }
});

/*
    get player card details
*/
requestRoutes.get("/:manager/:firstname", (req, res) => {
  try {
    res.json(returnDataBase()[req.params.manager][req.params.firstname]);
  } catch (e) {
    res.sendStatus(404, { err: "page not found" });
  }
});

/*
    middleWare sections
*/
requestRoutes.use(errorHandler.checkManagerNameInHeader);
requestRoutes.use(errorHandler.checkValidManger);

/*
    add soccer player 
*/
requestRoutes.post("/player", errorHandler.checkExistPlayer, (req, res) => {
  let dataBaseJson = returnDataBase();
  // build player json:
  let playerJson = new soccerClass.Player(
    req.body.firstname,
    req.body.lastname,
    req.body.salary,
    req.body.age,
    req.body.id,
    req.body.strongleg,
    req.body.position,
    req.body.celebration
  );
  dataBaseJson[req.headers.managername][req.body.firstname] = playerJson;
  saveDataBase(dataBaseJson);
  // res.sendStatus(200);
  res.json(dataBaseJson);
});

/*
    add soccer goalkeeper 
*/
requestRoutes.post("/goalkeeper", errorHandler.checkExistPlayer, (req, res) => {
  let dataBaseJson = returnDataBase();
  let playerJson = new soccerClass.GoalKeepr(
    req.body.firstname,
    req.body.lastname,
    req.body.salary,
    req.body.age,
    req.body.id,
    req.body.islefthanded,
    req.body.lastgoalconceded
  );
  dataBaseJson[req.headers.managername][req.body.firstname] = playerJson;
  saveDataBase(dataBaseJson);
  // res.sendStatus(200);
  res.json(dataBaseJson);
});

/*
    edit a player
*/
requestRoutes.put(
  "update/:detail/player",
  errorHandler.checkExistPlayer,
  errorHandler.checkPlayerAtterExist,
  (req, res) => {
    let dataBaseJson = returnDataBase();
    dataBaseJson[req.headers.managername][req.body.firstname][
      req.params.detail
    ] = req.body.newdetail;
    saveDataBase(dataBaseJson);
    res.json(dataBaseJson);
  }
);

/*
    edit a goalkeeper
*/
requestRoutes.put(
  "update/:detail/goalkeeper",
  errorHandler.checkExistPlayer,
  errorHandler.checkPlayerAtterExist,
  (req, res) => {
    let dataBaseJson = returnDataBase();
    dataBaseJson[req.headers.managername][req.body.firstname][
      req.params.detail
    ] = req.body.newdetail;
    saveDataBase(dataBaseJson);
    res.json(dataBaseJson);
  }
);

/*
    remove a player
*/
requestRoutes.delete("/remove", errorHandler.checkExistPlayer, (req, res) => {
  let dataBaseJson = returnDataBase();
  delete dataBaseJson[req.headers.managername][req.body.removedplayer];
  saveDataBase(dataBaseJson);
});

module.exports = requestRoutes;
