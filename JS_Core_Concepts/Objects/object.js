
// creation of Objects
// 1. using literals
let obj = {
    username: 'Abhinav'
}
let obj9 = {
    address: 'Delhi'
}
let obj2 = {...obj, ...obj9}
console.log(obj);
console.log(obj2);

// constructor 
// --> used to create objects
// can be written by programmer or used internally 
// whenever an object is created constructor runs
// only one 1 constructor for one object 


// 2. using Object 
// a. using object constructor
let obj3 = new Object();
obj3.username = 'abhi';
obj3.role = 'instructor'
console.log('obj3', obj3);

// b. using Object.create method
// c. Object.assign()
const obj4 = Object.create(obj3);
// let obj4 = obj3 --> not a new object creation
obj4.address = 'Delhi'
console.log(obj4);


// 3. using function constructors


// 4. using classes --> ES6 version of JS

let a = 10
console.log(a);
// Number()
// String()
// Boolean()

