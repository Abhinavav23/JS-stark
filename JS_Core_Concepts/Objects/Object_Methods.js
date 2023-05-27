/*
const arr  = ['val1', 'val2', 'val2']
console.log(arr);
console.log(arr.length);
console.log(arr[0]);

arr.myProperty = 'value'

console.log(arr.myProperty);

const newArr = new Array(1,2,3);
console.log(newArr);

console.log(newArr instanceof Array);
console.log(newArr instanceof Object);

const obj = {
    usename: 'abhinav'
}

console.log(obj);
obj.address = 'India'
console.log(obj);


let a = '100';
console.log(typeof a);
console.log(a+100);


function callTheFunPassed(callback){
    // ----
    // ----
    // ---
    console.log('calling the function');
    console.log(callback instanceof Function);
   
    if(callback instanceof Function){
        callback();
    }else{
        console.log('please pass a function to be called');
    }
    console.log(5+5);
    console.log('');
}

callTheFunPassed(() =>{
    console.log('callback function');
})

callTheFunPassed(1);
console.log(callTheFunPassed instanceof Function);
console.log(callTheFunPassed instanceof Object);

callTheFunPassed.someProperty = 'someValue'
console.log(callTheFunPassed);


let userInfo = {
  username: "abhinav",
  password: "12345",
};

let address = {
  city: "Delhi",
  country: "india",
};

const infoObj = { ...userInfo, ...address };
console.log(infoObj);
console.log(userInfo);
console.log(address);


let createdObj = Object.assign({}, userInfo, address);
console.log(createdObj);

let admin = {
    role: 'admin'
}
// taken target object (1st argument)
// copied all the properties from multiple source objects into target object 
// returned the modified target object 
let completeObj = Object.assign(admin, userInfo, address);
console.log(completeObj);
console.log(admin);
console.log(completeObj === admin);




// enumerating objects
// for in loop for Objects 
let obj = {
    username: 'Abhinav',
    address: 'Delhi',
    role: 'Instructor',
    takingClass: true,
    noOfClass: 5
}

// for(let myVal in obj){
//     console.log('key--->', myVal);
//     console.log('value --->',obj[myVal]);
// }

// // to access the keys of an Object 
// const keys = Object.keys(obj);
// console.log('keys', keys);
// console.log(obj);

// // to access the values
// const values = Object.values(obj);
// console.log(values);

// to access key values together
// converts the key value pairs into separate arrays and push it into new array 
// & return you the newly created array
const entriesInObj = Object.entries(obj);
console.log(entriesInObj);

// vice versa of object.entries
const getObjFromArray = Object.fromEntries(entriesInObj);
console.log(getObjFromArray);

let arr = [100, 'hundred', true, [1,2,3], {value: 100}]
// console.log(arr);

// returns an object with objects 
// tells information about each property on object
const propertyDescriptor = Object.getOwnPropertyDescriptors(obj);
console.log(propertyDescriptor);

// accessing property of an object 
console.log(obj.username);

const username = "noOfClass";
console.log(obj[username]);
console.log(obj["address"]);
console.log(obj['role']);
*/
let newObj = {};

newObj.newValue = 'value';
const pro2 = 'property2'
newObj[pro2] = 'value2';
newObj['property3'] = 'value3';
// console.log(newObj);


const sourde1 = {
    property4: 'value4'
}
Object.assign(newObj, sourde1, {property5: 5});


delete newObj.newValue
delete newObj.property4
console.log(newObj);