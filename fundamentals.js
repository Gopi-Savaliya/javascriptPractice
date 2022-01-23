//Exercises of javascript.info

// alert("I'm JavaScript!");

// let name = prompt("Enter Your name", "Gopi");
// alert(`Your name is ${name}`);



//***** Objects *****

//1

// let user = {};
// user.name = "John";
// user.surname = "Smith";
// alert(user.name);
// user.name = "Pete";
// alert(user.name);
// delete user.name;
// alert(user.name);


//2

// function isEmpty(obj) {
//     for(let i in obj){
//         return false;
//     }
//     return true;
// }
// let schedule = {};
// alert(isEmpty(schedule));
// schedule["8:30"] = "get up";
// alert(isEmpty(schedule)); 


//3

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// let sum=0;
// for(let key in salaries) {
//     sum += salaries[key];
// }
// alert(sum);


//4

// function multiplyNumeric(obj) {
//     for(let key in obj) {
//         if(!isNaN(obj[key])) {
//             obj[key] *= 2;
//         }
//     }
// }
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
// alert(`menu = {
//     width: ${menu.width},
//     height: ${menu.height},
//     title: ${menu.title}
// }`);  
// multiplyNumeric(menu);
// alert(`menu = {
//     width: ${menu.width},
//     height: ${menu.height},
//     title: ${menu.title}
// }`);


//***** Object methods, "this" *****

//1

// let calculator = {
//     a: {},
//     b: {},
//     read: function(){
//         this.a = +prompt("Enter a:",0);
//         this.b = +prompt("Enter b:",0);
//     },
//     sum: function(){
//         return this.a + this.b;
//     },
//     mul: function(){
//         return this.a * this.b;
//     }
// };
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());


//2

// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this;
//     },
//     down() {
//       this.step--;
//       return this;
//     },
//     showStep: function() { // shows the current step
//       alert( this.step );
//       return this;
//     }
// };
// ladder.up().up().down().showStep().down().showStep();



//***** Constructor, operator "new" *****

//1

// let val={};
// function A() { return val; }
// function B() { return val; }
// let a = new A;
// let b = new B;
// alert( a == b );


//2

// function Accumulator(startingValue) {
//     this.value = startingValue;
//     this.read= function() {
//         this.value += +prompt("Enter number:");
//     }
// }
// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read(); 
// alert(accumulator.value);



//***** Optional chaining '?.' *****

// let user = {}; 
// alert( user?.address?.street );



//***** Symbol Type *****

// let id1 = Symbol("id");
// let id2 = Symbol("id");
// alert(id1 == id2);



//***** Data Types *****

//***** Methods of primitives *****

// let str = "Hello";
// str.test = 5;
// alert(str.test); // undefined



//***** Numbers *****

//1

// let a = prompt("Enter number 1:", 0);
// let b = prompt("Enter number 2:", 0);
// alert(+a + +b);


//2

// alert( Math.round(6.35 * 10) / 10);


//3

// function fun(){
//     let val = prompt("Enter number", 0);
//     if(!isFinite(val)) {
//         fun();
//     }
//     if(val==null || val=='') {
//         return null;
//     }
//     alert(val);
// }
// fun();


//4

// function random(min, max){
//     return min + Math.random() * (max - min);
// }
// alert(random(1, 5));
// alert(random(1, 5));


//5

// function randomInteger(min, max) {
//     return Math.floor(min + Math.random() * (max + 1 - min));
// }
// alert(randomInteger(1,3));



//***** Strings *****


//1

// function ucFirst(str) {
//     return str[0].toUpperCase() + str.slice(1);
// }
// alert(ucFirst("john") == "John");


//2

// function checkSpam(str) {
//     return (str.toLowerCase().includes('viagra') || str.toUpperCase().includes('XXX'));
// }
// alert(checkSpam('buy ViAgRA now'));
// alert(checkSpam('free xxxxx'));
// alert(checkSpam("innocent rabbit"));


//3

// function truncate(str, maxlength) {
//     return str.length>maxlength ? (str.slice(0,maxlength-1) + "...") : str;
// }
// alert(truncate("What I'd like to tell on this topic is:", 20));
// alert(truncate("Hi everyone!", 20));


//4

// function extractCurrencyValue(str) {
//     return +str.slice(1);
// }
// alert( extractCurrencyValue('$120') === 120 ); 



//***** Arrays *****


//1

// let fruits = ["Apples", "Pear", "Orange"];
// // push a new value into the "copy"
// let shoppingCart = fruits;
// shoppingCart.push("Banana");
// // what's in fruits?
// alert( fruits.length );


//2

// let styles = ["Jazz", "Blues"];
// alert(styles);
// styles.push("Rock-n-Roll");
// alert(styles);
// styles[((styles.length+1)/2)-1] = "Classics";
// alert(styles);
// styles.shift();
// alert(styles);
// styles.unshift("Rap", "Reggae");
// alert(styles);


//3

// let arr = ["a", "b"];
// arr.push(function() {
//   alert( this );
// })
// arr[2](); 


//4

// function sumInput() {
//     let array = [];
//     let num;
//     while(true) {
//         num = prompt("Enter number:",0);
//         if(!isFinite(num) || num=="" || num==null) {
//             break;
//         }
//         array.push(+num);
//     } 
//     let sum = 0;
//     for(let i=0; i<array.length; i++) {
//         sum+=array[i];
//     }
//     return sum;
// }
// alert(sumInput());



//***** Array methods *****

//1

// function camelize(str) {
//     return str
//         .split('-')
//         .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
//         .join('');
// }
// alert(camelize("background-color") == 'backgroundColor');
// alert(camelize("list-style-image") == 'listStyleImage');
// alert(camelize("-webkit-transition") == 'WebkitTransition');


//2

// function filterRange(arr, a, b) {
//     return arr.filter(i => arr[i] >= a && arr[i] <= b);
// }
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert( filtered ); // 3,1 (matching values)
// alert( arr ); 


//3

// function filterRangeInPlace(arr, a, b) {
//     for(let i=0;i<arr.length;i++) {
//         if(a <= arr[i] <= b) {
//             arr.splice(i,1);
//         }
//     }
// }
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4);
// alert( arr );


//4

// function decreasing(a, b) {
//     if(a>b) {
//         return -1;
//     } else if(a == b){
//         return 0;
//     } else if(a<b){
//         return 1;
//     }
// }
// let arr = [5, 2, 1, -10, 8];
// arr.sort(decreasing);
// alert( arr );


//5

// function sortedfun(a, b) {
//     if(a<b){
//         return -1;
//     } else if(a==b) {
//         return 0;
//     } else if(a>b) {
//         return 1;
//     }
// }
// function copySorted(arr) {
//     return arr.slice().sort(sortedfun);
// }
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr );


//6

// function Calculator() {
//     this.methods = {
//         "-": (a, b) => a - b,
//         "+": (a, b) => a + b
//     };
//     this.calculate = function(str) {
//         let part = str.split(' '),
//         a = +part[0],
//         op = part[1],
//         b = +part[2];
//         if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//             return NaN;
//         }
//         return this.methods[op](a, b);
//     };
//     this.addMethod = function(name, func) {
//         this.methods[name] = func;
//     };
// }
// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);
// let result = powerCalc.calculate("2 ** 3");
// alert( result );


//7

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
// let users = [ john, pete, mary ];
// let names = users.map(user=>user.name);
// alert( names );


//8

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };
// let users = [ john, pete, mary ];
// let usersMapped = users.map(user=>({
//     id: user.id,
//     fullName: `${user.name} ${user.surname}`
// }));
// alert( usersMapped[0].id );
// alert( usersMapped[0].fullName );


//9

// function shuffle(array) {
//     array.sort(() => Math.random() - 0.5);
// }
// let arr = [1, 2, 3];
// shuffle(arr);
// alert(arr);


//10

// function getAverageAge(users) {
//     return users.reduce((avg, cur) => avg + cur.age, 0) / users.length;
// }
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };
// let arr = [ john, pete, mary ];
// alert(getAverageAge(arr));


//11

// function unique(arr) {
//     let array = [];
//     for(let i=0;i<arr.length;i++){
//         if(!array.includes(arr[i])) {
//             array.push(arr[i]);
//         }
//     }  
//     return array;
// }
// let strings = ["Hare", "Krishna", "Hare", "Krishna",
// "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// alert(unique(strings));


//12

// function groupById(array) {
//     return array.reduce((obj, value) => {
//         obj[value.id] = value;
//         return obj;
//     }, {})
// }
// let users = [
// {id: 'john', name: "John Smith", age: 20},
// {id: 'ann', name: "Ann Smith", age: 24},
// {id: 'pete', name: "Pete Peterson", age: 31},
// ];
// let usersById = groupById(users);
// for(let i in usersById){
//     alert(i);
// }



//***** Map and Set *****

//1

// function unique(arr) {
//     return Array.from(new Set(arr));
// }
// let values = ["Hare", "Krishna", "Hare", "Krishna",
// "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// alert(unique(values));


//2

// function aclean(arr) {
//     let map = new Map();
  
//     for (let word of arr) {
//         let sorted = word.toLowerCase().split('').sort().join('');
//         map.set(sorted, word);
//     }
//     return Array.from(map.values());
// }
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// alert(aclean(arr));


//3

// let map = new Map();
// map.set("name", "John");
// let keys = Array.from(map.keys());
// keys.push("more");
// alert(keys);



//***** Object.keys, values, entries ****** 

// function count(obj) {
//     return Object.keys(obj).length;
// }
// let user = {
//     name: 'John',
//     age: 30
// };
// alert(count(user));



//***** Date and Time *****

//1

// let d1 = new Date(2012, 1, 20, 3, 12);
// alert(d1);


//2

// function getWeekDay(date) {
//     let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']; 
//     return days[date.getDay()];
// }
// let date = new Date(2012, 0, 3);
// alert(getWeekDay(date));


//3
// function getLocalDay(date) {
//     let day = date.getDay();
//     if (day == 0) { 
//       day = 7;
//     } 
//     return day;
// }
// let date = new Date(2012, 0, 3); 
// alert(getLocalDay(date));


//4

// function getDateAgo(date, days) {
//     let d = new Date(date);
//     d.setDate(date.getDate() - days);
//     return d.getDate();
// }
// let date = new Date(2015, 0, 2);
// alert(getDateAgo(date, 1)); 
// alert(getDateAgo(date, 2)); 
// alert(getDateAgo(date, 365));



//***** JSON methods, toJSON *****

//1

// let user = {
//     name: "John Smith",
//     age: 35
// };
// let str = JSON.stringify(user);
// alert(str);
// let variable = JSON.parse(str);
// alert(variable);


//2

// let room = {
//     number: 23
// };
// let meetup = {
//     title: "Conference",
//     occupiedBy: [{name: "John"}, {name: "Alice"}],
//     place: room
// };
// room.occupiedBy = meetup;
// meetup.self = meetup;
// alert( JSON.stringify(meetup, function replacer(key, value) {
//     return (key != "" && value == meetup) ? undefined : value;
// }));



//***** Recursion and stack *****

//1

// function sumTo(n) {
//     if (n == 1) {
//         return 1;
//     }
//     return n + sumTo(n - 1);
// }
// alert(sumTo(100));


//2

// function factorial(n) {
//     if(n == 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }  
// alert(factorial(5));


//3

// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };
// function printList(list) {
//     alert(list.value); 
//     if (list.next) {
//         printList(list.next);
//     }  
// }  
// printList(list);



//***** Variable scope, closure *****

function inBetween(a, b) {
    return function(x) {
        return x >= a && x <= b;
    };
}
function inArray(arr) {
    return function(x) {
        return arr.includes(x);
    };
}
let arr = [1, 2, 3, 4, 5, 6, 7];
alert(arr.filter(inBetween(3, 6)));
alert(arr.filter(inArray([1, 2, 10])));
