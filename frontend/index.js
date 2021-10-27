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
