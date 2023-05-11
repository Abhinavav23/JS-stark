/*
console.log(Math);

console.log(Math.PI);
console.log(Math.SQRT2);

let no1 = 3.954
let no2 = 3.454
console.log(Math.round(no1));
console.log(Math.round(no2));


console.log(Math.ceil(no2));
console.log(Math.floor(no2));

console.log();

console.log('max',Math.max(6,9,7,5));
console.log('min',Math.min(3,8,90,0));

Math.pow(2,3)

console.log(Math.round(Math.random() * 10));

console.log(Math.cos(Math.PI / 4));
console.log(Math.tan(Math.PI / 4));

console.log(Math.sqrt(20));

// ----------------- Strings ---------------------

let username = "Abhinav";
let info = "My name is Abhinav";

let role = 'Instructor'

let desc1 = "It's hot out there"
let desc2 = 'It"s hot out there'

let desc3 = 'It\'s hot out there'
let desc4 = 'It\"s hot out there'


let no = true

console.log(username);
console.log(info);
console.log(role);
console.log(desc1);
console.log(desc2);

console.log('My Name is Abhinav.\n I am an instructor');
console.log('My Name is \t Abhinav');


let arr = [1, 2, 3, 7, 9, 0];
let str = "Abhinav";
console.log(str.length);
console.log(str[3]);

arr[3] = 101;
console.log(arr);

str[3] = "j";
console.log(str);

let city = "Delhi";
let country = "India";
let pin = "10010";
let locality = "Vasantkunj";

let address = city + " in " + country; //concatenation
console.log(address);

console.log(
  "I live in " +
    city +
    " a city in " +
    country +
    " pin is " +
    pin +
    " in locality " +
    locality
);
// template literals --> ES6 feature
console.log(
  `I live in ${city} a city in ${country} pin is ${pin} in locality ${locality}`
);

*/
// search

let str = 'I am a string'
console.log(str.length);

console.log(str.indexOf('a'));
console.log(str.lastIndexOf('a'));
console.log(str.includes('a', 3));

console.log(str.charAt(3));
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let splitStr1 = str.split(" ")
let splitStr2 = str.split("")
console.log(splitStr1);
console.log(splitStr2);

let newStr = str.substring(1,6);
console.log(newStr);

// substrings cant use -ve values however slicing can
let newStr1 = str.slice(1,6);
let newStr2 = str.slice(-5, -3);
console.log(newStr1);
console.log(newStr2);

let replacedStr = str.replace('string', 'boolean');
console.log(replacedStr);

// ['str1', 'str2', 'str3']