// const amount = 12;
// if (amount < 10) {
//   console.log("small number");
// } else {
//   console.log("larger number");
// }
// console.log(`heyy its my first node program`);

//Common Js, every file in module (by default)
////////Modules = Enclapsulated Code (only Share minumun)
const names = require("./4-names");
const sayHi = require("./5-utils");
console.log(names);
const data = require("./6-alternative-flavour");
require("./7-mind-grenade");
//console.log(data);

// sayHi("susan");
// sayHi(names.john);
// sayHi(names.peter);
// console.log(data.signlePerson);
// console.log(data.signlePerson.name);
