// operator in JS
/*
let a = 20;
let b = 30;

// Arithmatic oparators
console.log(a+b); //50
console.log(a-b); //-10
console.log(a*b); // 600
console.log(a/b); // 0.66
console.log(a**4); // 
console.log(a**3); // 
console.log(a**5); // 
console.log(a%7); // modulo
console.log(a%9); // 

// unary operators ++, --
// console.log(a+1); //21
console.log('increment or decrement operators');
console.log(a++); //20
console.log(++a); //22
console.log(a++); //22

console.log(--a); // 22
console.log(a--); //22
// console.log(++a);
// console.log(a);
// 


// Assignment operators
var z = 445;
console.log(z);
// z = z+10;
z+=10
console.log(z);
// z= z*2
z*=2
console.log(z);

// comparison operators --> boolean values
// for basic comparison '==' or '==='

console.log(1==1);
console.log(1===1);

console.log('abhinav'=='abhinav');
console.log('abhinav'==='abhinav');


// --> if value is equal to 1 and add 10 to it --> 11

console.log('1' == 1); //true --> compares only the values by doing type conversion automatically

console.log('1' === 1); //false --> compare the value and type

console.log(typeof null);

console.log(null == null);
console.log(undefined == "undefined");


console.log(true === "1"); //false
console.log(true == "1"); //false

console.log(1 != "2") // --> checks only for value
console.log(1 !== 1) // type and value

// greater than - >
// less than - <
// greater than and equal - >=
// less athn and equal - <=

console.log(4>7);//false
console.log(4<7); //t
console.log(4<=7); //true
console.log(7>=7); // true




// logical operators
// AND --> &&
// OR --> ||
// NOT --> !


const val1 = 7>9 && 5>6 // false && true --> false
console.log(val1);

const val2 = 7>6 || 15<6
console.log(val2); //true

const val3 = 'abhi' === 'abhi' && 13 >=2 && "ab" == "ab"
console.log(val3);

const val4 = '1' == 5 || 13 >=20 || true == '1'
console.log(val4);

// exam -1
// pass student only if their marks is more than or equals 50
// and time taken should be less than 25

// ternary operator
var studentMarks = 60
var timeTaken = 20
// before ? returns true or false value
const result1 = studentMarks >=50 && timeTaken < 25  ? 'pass' : 'fail'


console.log(result1);

// exam-2
// pass student only if their marks is more than 60
// or time taken should be less than 25
var studentMarks = 60;
var timeTaken = 30;
const result2 = studentMarks > 60 || timeTaken < 25 ? "pass" : "fail";

// bitwise operator
// AND --> & --> 
// OR --> |
// XOR --> ^
// NOT --> ~ --> visit later

// 11->1
// 01->0
// 10->0
// 00->0

// 8421
const val1 = 4&2 
// 100
// 010
// -----
// 000
const val2 = 4|5 
// 100
// 101
// ----- OR
// 101
const val3 = 4^5 
// 100
// 101
// -----
// 001
// const val4 = ~ 3
// 100
// 011
console.log(val1); //0
console.log(val2); //5
console.log(val3); //1
console.log(val4);

// 

*/
// conditional in JS
// exam-2
// pass student only if their marks is more than 60
// or time taken should be less than 25

let marks = 61;
let passMarks = 31
// let timeTaken = 30;
let result;
// if(true){
//     // this will be executed
// } else{
//     // not true then this
// }

console.log(71>70);

if(marks > passMarks){
    result = 'pass'
    console.log('student passed'); //1
}else{
    result = 'failed'
    console.log('student failed'); //2
}

if(passMarks === 30){
    console.log('pass marks is minimal');
}

console.log('result is ', result);