/*
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
// create using function keyword
// write the first letter as caps
// accept properties as parameters
const person1 = {
    name: 'Abhinav',
    role: 'Instructor',
    address: 'India',
    // --
    // --
    // --
    // --
}

const person2 = {
    name: 'Adarsh',
    role: 'student',
    address: 'India',
    // --
    // --
    // --
    // --
}



function Person(name, role, address, age){
    // creating a property name for Person
    this.name1 = name;
    this.role = role;
    this.address = address;
    this.ageOfPerson = age;
    this.printInfo = function(){
        console.log('Hey this is my info', this.name1);
    }
}

const person3 = new Person('Aswath', 'student', 'India', 25);
const person4 = new Person('Shubham', 'student', 'India');

// usage of new keyword
// creates a new object
// creates reference(this) to this and point it to newly created object
// return that ref(this)
console.log(person3);
console.log(person3.name);
person3.printInfo()
console.log(person4);


// factory function
// doesn't use new keyword
// we create an object on our own
// specifically returning the object
function House(name, add, noOfRooms, noOfFloors){
    return {
        houseName: name,
        address: add,
        rooms: noOfRooms,
        floors: noOfFloors,
        houseInfo: function(){
            console.log('my house is great');
        }
    }
}

const nyHouse = House('Home', 'Delhi', 3, 2);
console.log(nyHouse);
console.log(nyHouse.indexOf);
nyHouse.houseInfo()


// 4. using classes --> ES6 version of JS


// let a = 10
// console.log(a);
// Number()
// String()
// Boolean()

const a = 10;
console.log(a);

const b = Number(20);
console.log(b);

const c = new Number(100);
console.log(c);
console.log(c+20);

const str = 'abhinav';
console.log(str);

const str1 = String('SomeValue');
console.log(str1);

const str3 = new String('newString');
console.log(str3);

const arr = [1,2,3]
console.log(arr);

const arr1 = new Array(2);
console.log(arr1);
arr1[0] = 100
arr1.push(30)
console.log(arr1);

const arr2 = new Array(1,2,3);
console.log(arr2);
*/
const obj = {
    username: 'abhinav',
    address: 'India',
    instructor: 'Stark',
}

function getUsername(){
    console.log(obj.username);
   return obj.username
}
function getAddress(){
    console.log(obj.address);
    return obj.address
}
// if username is requires
getUsername();
// if address is required
getAddress();


// dynamically accessing the property
function getProperty(propertyName){ 
    console.log('propertyName--->', propertyName);
    console.log('property value', obj[propertyName]);
}

function tenMultiplier(no){
    return 10*no
}

function twentyMultiplier(no){
    return 20*no
}

function mutiplier(noTomutiply, number){
    return noTomutiply*number
}


// getProperty('username');
// getProperty('address');
// getProperty('instructor');

const obj22 ={
    name: 'Abhinav',
    address: 'India', 
    property1: 0,
    property2: 0
}

// dynamically creating a property
function createObjectWithProperties(prop1, propr2){
    let obj = {
        name: 'Abhinav',
        address: 'India', 
        [prop1]: 0,
        [propr2]: 0
    }
    console.log(obj);
}

createObjectWithProperties('score', 'hours');
createObjectWithProperties('failedTimes', 'timeNow');
