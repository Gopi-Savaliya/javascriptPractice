//exercises of learn-js.org



//Promises

// function upperCaseAsync(s) {
//     // write your code here
//      return new Promise((resolve, reject) => {
//         if (s === null) {
//             reject('String is empty');
//         } else {
//             resolve(s.toUpperCase());
//         }
//     });
// }

// upperCaseAsync("steve").then(console.log);
// upperCaseAsync(null).catch((x) => {
//     console.log("No string received!");
// });



//Async and Await

// function sleep(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function uppercaseString(s) {
//     // your code goes here
//     await sleep(500);
    
//     return s.toUpperCase();
// }

//uppercaseString("edward").then(console.log);



//Object Oriented JavaScript

// function Person(name, age){
//     this.name = name;
//     this.age = age;
    
//     this.describe = function() {
//      	return this.name + ", " + this.age + " years old";
//     }
// }

// var jack = new Person("Jack", 25);
// var jill = new Person("Jill", 24);
// console.log(jack.describe());
// console.log(jill.describe());



//Function Context

// var person = {
//     firstName : "John",
//     lastName : "Smith",
//     age : 23
// };

// function printFullName()
// {
//     console.log(this.firstName + " " + this.lastName);
// }

// function printDetails()
// {
//     console.log(this.firstName + " is " + this.age + " years old");
// }

// // TODO: create bound copies of printFullName and printDetails.
// var boundPrintFullName = printFullName.bind(person);
// var boundPrintDetails = printDetails.bind(person);

// boundPrintFullName();
// boundPrintDetails();



//Inheritance

// var Person = function() {};

// Person.prototype.initialize = function(name, age)
// {
//     this.name = name;
//     this.age = age;
// }

// // TODO: create the class Teacher and a method teach
// var Teacher = function(){};
// Teacher.prototype = new Person();
// Teacher.prototype.teach = function(subject){
//     console.log(this.name+' is now teaching '+subject);
// }

// var him = new Teacher();

// him.initialize("Adam", 45);
// him.teach("Inheritance");




//Destructuring

const person = {
    head: {
        eyes: 'x',
        mouth: {
            teeth: 'x',
            tongue: 'x'
        }
    },
    body: {
        shoulders: 'x',
        chest: 'x',
        arms: 'x',
        hands: 'x',
        legs: 'x'
    }   
};

const numbers = ['2', '3', '4'];

// TODO: Destructure here.
let { legs: myLegs } = person.body;
let [, , thirdPosition] = numbers;

console.log(myLegs);
console.log(thirdPosition);

