"use strict";
const moment = require("moment");

/*
  Person Class
*/
class Person {
  #id;
  constructor(firstName, sureName, salary, age, id) {
    this.firstName = firstName;
    this.sureName = sureName;
    this.salary = salary;
    this.age = age;
    this.#id = id;
  }

  showId() {
    return this.#id;
  }

  get Raise() {
    return this.salary * 1.025;
  }

  set newincome(salary) {
    this.salary = salary;
  }
}

/*
  Player Class
*/
class Player extends Person {
  #id;
  constructor(
    firstName,
    sureName,
    salary,
    age,
    id,
    strongLeg,
    position,
    celebrationSentence
  ) {
    super(firstName, sureName, salary, age, id);
    this.strongLeg = strongLeg;
    this.position = position;
    this.celebrationSentence = celebrationSentence;
  }

  // access all propeties
  get playerData() {
    return new Player(
      this.firstName,
      this.sureName,
      this.salary,
      this.age,
      (this.#id = this.showId()),
      this.strongLeg,
      this.position,
      this.celebrationSentence
    );
  }

  // in case a player scored
  goalClebration() {
    this.salary = this.Raise;
    console.log(`your new income ${this.salary}`);
    console.log(this.sayCelebSent);
  }

  get sayCelebSent() {
    return this.celebrationSentence;
  }

  set salaryUpdate(newsalary) {
    this.salary = newsalary;
  }

  set ageUpdate(newAge) {
    this.age = newAge;
  }

  set positionUpdate(newPosition) {
    this.position = newPosition;
  }

  set celebrationSentenceUpdate(newSent) {
    this.celebrationSentence = newSent;
  }
}

/*
  GoalKeeper Class
*/
class GoalKeepr extends Person {
  #id;
  constructor(
    firstName,
    sureName,
    salary,
    age,
    id,
    isLeftHanded,
    { lastGoalConceded = moment().format("MMMM Do YYYY, h:mm:ss a") }
  ) {
    super(firstName, sureName, salary, age, id);
    this.isLeftHanded = isLeftHanded;
    this.lastGoalConceded = lastGoalConceded;
  }

  concededAGoal() {
    this.lastGoalConceded = moment().format("MMMM Do YYYY, h:mm:ss a");
    this.salary = this.Reduction;
    console.log(
      `you conceded a new goal on the ${this.lastGoalConceded}, there for your new salary is ${this.salary}`
    );
  }

  get Reduction() {
    return this.salary * 0.975;
  }

  set newGoalConceded(concededAGoal) {
    this.lastGoalConceded += concededAGoal;
  }
}

let noam = new GoalKeepr(
  "firstName",
  "sureName",
  240,
  23,
  22,
  true,
  moment().format("MMMM Do YYYY, h:mm:ss a")
);

let nina = new Player("nina", "bolob", 22, 22, 22, "left", "LM", "dont");
console.log((nina.salaryUpdate = 33));
console.log(nina);
