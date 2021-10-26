"use strict";

const moment = require("moment");

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

// let personal = new Person("firstName", "sureName", 22000000, 21, 10);
// personal.newincome = 250;
// console.log(personal.Raise);

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

  goalClebration() {
    this.salary = this.Raise;
    console.log(`your new income ${this.salary}`);
    console.log(this.sayCelebSent);
  }

  get sayCelebSent() {
    return this.celebrationSentence;
  }

  set CelebSent(newSent) {
    this.celebrationSentence = newSent;
  }
}

// let zehavi = new Player(
//   "firstName",
//   "sureName",
//   240,
//   23,
//   22,
//   "strongLeg",
//   "position",
//   "helllyeaa"
// );

// console.log(zehavi.goalClebration());

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

// console.log(noam);
console.log(noam.concededAGoal());
