"use strict";
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
    middle ware for managername: Global middleware
*/

function checkValidManger(req, res, next) {
  let dataBaseJson = returnDataBase();
  if (Object.keys(dataBaseJson).includes(req.headers.managername)) {
    next();
  } else {
    res.sendStatus(401);
  }
}

/*
    middle ware for player name: local middleware
*/

function checkExistPlayer(req, res, next) {
  let dataBaseJson = returnDataBase();
  if (
    Object.keys(dataBaseJson[req.headers.managername]) !== req.body.firstname
  ) {
    next();
  } else {
    res.sendStatus(403);
  }
}

/*
    middle ware for player atter: local middleware
*/
function checkPlayerAtterExist(req, res, next) {
  let dataBaseJson = returnDataBase();
  if (
    Object.keys(dataBaseJson[req.headers.managername][req.body.firstname]) ===
    req.params.detail
  ) {
    next();
  } else {
    res.sendStatus(401);
  }
}
