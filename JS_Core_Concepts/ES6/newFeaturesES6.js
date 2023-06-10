// ES6 features

// classes
// Array methods --> map, filter, reduce, some, every
// default parameters in functions
// rest and spread operators(...)
// template literals(`${}`)
// we got two new ways of declaring variables (let and const) previously we were using var
// arrow functions
// Destructuring
// ES6 modules --> React
// promises

// Destructuring

// let scoreInWeek1 = 45
// let scoreInWeek2 = 43
// let scoreInWeek3 = 47

// let scores = [45,43,47];
// console.log(scores);
/*
let students = ['Aswath', 'Ujjwal', 'shubham', 'Suraj']

// console.log(students);

let student1 = students[0]
let student2 = students[1]
let student3 = students[2]
let student4 = students[3]

// let [arr[0], arr[1], arr[2]] = arr
const [s1, s2, s3, s4, s5] = students;

let a;

// const val = undefined
// console.log(s1);
console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
console.log(s5);


let students = ['Aswath', 'Ujjwal', 'shubham', 'Suraj'];

// let s1;
// let s2;
// var variableName = [s1, s2]

let [,,s1,s2] = students;

console.log(s1);
console.log(s2);

const third = students[2]
const fourth = students[3]
*/

const userInfo = {
  address: {
    country: {
      name: "India",
      code: "+91",
    },
    city: "Delhi",
  },
  role: "Instructor",
  username: "Abhinav",
};
// console.log(userInfo.address.country);
// console.log(userInfo.username);

// you have to use same names as keys
// order doesn't matter

const {
  role: myRole,
  username: user,
  address: {
    country: { name, code },
    city,
  },
  score, //undefined
} = userInfo;

console.log(myRole);
console.log(user);
console.log(name);
console.log(code);
console.log(city);


// const { role, username, address } = userInfo;
// const {country, city} = address
// const {name, code} = country

// console.log(username);
// console.log(role);
// console.log(address);
// console.log(country);
// console.log(name);
// console.log(code);
