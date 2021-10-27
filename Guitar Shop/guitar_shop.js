// "use strict";

// class ClassicGuitar {
//   #id;
//   constructor(
//     manufactureYear,
//     brand,
//     price,
//     { numberOfString = 6 },
//     { used = false },
//     id
//   ) {
//     this.manufactureYear = manufactureYear;
//     this.brand = brand;
//     this.price = price;
//     this.numberOfString = numberOfString;
//     this.used = used;
//     this.#id = id;
//   }
//   showId() {
//     return this.#id;
//   }
//   play(sound) {
//     console.log(sound);
//     this.price = this.priceDrop;
//     this.used = true;
//     return new ClassicGuitar(
//       this.manufactureYear,
//       this.brand,
//       this.price,
//       this.numberOfString,
//       this.used,
//       this.#id
//     );
//   }

//   get priceDrop() {
//     return this.price * 0.9;
//   }

//   set newPrice(newprice) {
//     this.price = newprice;
//   }
//   set newManuFactureYear(manufactureYear) {
//     this.manufactureYear = manufactureYear;
//   }
//   set newBrand(brand) {
//     this.brand = brand;
//   }
//   set newId(id) {
//     this.#id = id;
//   }

//   static detectSound(sound) {
//     if (sound === "🎸") {
//       console.log("ElectricGuitar");
//     } else if (sound === "🔊") {
//       console.log("BassGuitar");
//     } else {
//       console.log("not a guitar");
//     }
//   }
// }

// // let myguitar = new ClassicGuitar(1999, "yolo", 500, 6, false, 10);
// // console.log(myguitar);

// class ElectricGuitar extends ClassicGuitar {
//   #id;
//   constructor(
//     manufactureYear,
//     brand,
//     price,
//     { numberOfString = 6 },
//     { used = false },
//     id,
//     longNeck
//   ) {
//     super(manufactureYear, brand, price, numberOfString, used, id);
//     this.longNeck = longNeck;
//   }
//   play() {
//     super.play("🎸🎸🎸");
//     return new ClassicGuitar(
//       this.manufactureYear,
//       this.brand,
//       this.price,
//       this.numberOfString,
//       this.used,
//       this.#id,
//       this.longNeck
//     );
//   }
// }

// // let myguitar = new ElectricGuitar(1999, "yolo", 500, 6, false, 10, true);
// // console.log(myguitar.play());

// class BassGuitar extends ClassicGuitar {
//   #id;
//   constructor(
//     manufactureYear,
//     brand,
//     price,
//     { numberOfString = 4 },
//     { used = false },
//     id
//   ) {
//     super(manufactureYear, brand, price, numberOfString, used, id);
//   }
//   play() {
//     super.play("🔊🔊🔊");
//     return new ClassicGuitar(
//       this.manufactureYear,
//       this.brand,
//       this.price,
//       this.numberOfString,
//       this.used,
//       this.#id
//     );
//   }

//   playSolo() {
//     let mixSequence = "";
//     let allChar = ["💥", "🤘", "🎵", "📢", "💢", "🕺"];
//     let mixedAllChar = allChar.sort(mix);
//     function mix(a, b) {
//       return 0.5 - Math.random();
//     }
//     for (let char of mixedAllChar) {
//       mixSequence += char;
//     }
//     return mixSequence;
//   }
// }

// let myguitar = new BassGuitar(1999, "yolo", 500, 6, false, 10);
// console.log(myguitar.playSolo());
