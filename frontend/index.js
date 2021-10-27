"use strict";

function removeGoliFields() {
  const goalkeeperDiv = document.querySelector("#golidiv");
  const playerDiv = document.querySelector("#playerDiv");
  goalkeeperDiv.style.display = "none";
  playerDiv.style.display = "block";
}
function removePlayerFields() {
  const goalkeeperDiv = document.querySelector("#golidiv");
  const playerDiv = document.querySelector("#playerDiv");
  goalkeeperDiv.style.display = "block";
  playerDiv.style.display = "none";
}
function updatePlayerFields() {}
function updateGoalkeeperFields() {}

// document.querySelector("#form-submit").addEventListener("click", (e) => {
//   e.preventDefault();
//   const formName = document.querySelector("#form-name").value;
//   const formLast = document.querySelector("#form-last").value;
//   const formSalary = document.querySelector("#form-salary").value;
//   const formAge = document.querySelector("#form-age").value;
//   const formId = document.querySelector("#form-id").value;
//   const formStrongLeg = document.querySelector("#form-strongleg").value;
//   const formPosition = document.querySelector("#form-position").value;
//   const formCelebration = document.querySelector("#form-celebration").value;
//   const formIsLefthanded = document.querySelector("#form-islefthanded").value;
//   const formLastGoalConced = document.querySelector(
//     "#form-lastGoalConced"
//   ).value;
//   console.log(
//     formName,
//     formLast,
//     formSalary,
//     formAge,
//     formId,
//     formStrongLeg,
//     formPosition,
//     formCelebration
//   );
// });

document.querySelector("#form-submit").addEventListener("click", (e) => {
  e.preventDefault();
  const getSwitch = document.querySelector(
    'input[name="switch-one"]:checked'
  ).value;
  console.log(getSwitch);
});

async function addPlayer() {
  let postTestUrl = "http://localhost:8080/team/player";
  const postTest = await axios({
    method: "POST",
    url: postTestUrl,
    data: {
      firstname: "loolo",
      lastname: "abergel",
      salary: 500,
      age: 22,
      id: 1,
      strongleg: "right",
      position: "ST",
      celebration: "win",
    },
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      managername: "oryan",
    },
  });
}
addPlayer();

async function testConnection() {
  let getUrl = "http://localhost:8080/manager/oryan";

  const testTest = await axios.get(getUrl);
  console.log(testTest["data"]);
}

testConnection();
