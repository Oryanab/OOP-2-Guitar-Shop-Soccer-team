"use strict";
const fs = require("fs");
const path = require("path");

/*
    get database
*/
function returnDataBase() {
  let dataBase = fs.readFileSync(
    path.resolve(__dirname, "../../../database.json")
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
    check if there a header with managername
*/
function checkManagerNameInHeader(req, res, next) {
  if (req.headers.managername) {
    next();
  } else {
    res.send(401, { error: "hi, headers must supply a manager name" });
  }
}

/*
    middle ware for managername: Global middleware
*/

function checkValidManger(req, res, next) {
  let dataBaseJson = returnDataBase();
  if (Object.keys(dataBaseJson).includes(req.headers.managername)) {
    next();
  } else {
    res.send(401, { error: "hi, headers must sign up as a manager first" });
  }
}

/*
    middle ware if player already exist for post
*/

function checkAlreadyExistPlayer(req, res, next) {
  let dataBaseJson = returnDataBase();
  if (
    !Object.keys(dataBaseJson[req.headers.managername]).includes(
      req.body.firstname
    )
  ) {
    next();
  } else {
    res.send(403, {
      error: "hi, player already exist",
    });
  }
}
/*
    middle ware if player not exist for put
*/

function checkExistPlayer(req, res, next) {
  let dataBaseJson = returnDataBase();
  if (
    !Object.keys(dataBaseJson[req.headers.managername]).includes(
      req.body.firstname
    )
  ) {
    next();
  } else {
    res.send(404, {
      error: "hi, sorry we couldnt find this player, make sure he signed up",
    });
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
    res.send(401, { error: "hi, we could not find the player attribute" });
  }
}

module.exports = {
  checkManagerNameInHeader,
  checkValidManger,
  checkExistPlayer,
  checkPlayerAtterExist,
  checkAlreadyExistPlayer,
};
