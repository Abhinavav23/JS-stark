
/*
// creating a memory
let a = 20;
// reading from memory
console.log('a', a);
// update a value
a= 30
let b = a
console.log('a', a);
console.log('b', b);
// update a value
a = 40
console.log('b', b);



// memory management ---> allocating and deallocating/cleanup
// clearing or refining the memory
// because high level languages does it on their own

// Ref types
let arr1 = [1,2,3]
let arr2 = arr1
console.log('arr1', arr1);
console.log('arr2', arr2);

arr1.push(59);
console.log('after pushing into array');
console.log('arr1', arr1);
console.log('arr2', arr2);

arr1 = [40,50]
console.log('arr1', arr1);
console.log('arr2', arr2);


let obj1 = {
    username: 'abhinav'
}

let obj2 = obj1
console.log('obj1', obj1);
console.log('obj2', obj2);

obj2.add = 'India'
console.log('obj1', obj1);
console.log('obj2', obj2);

obj1.role = 'ins'
console.log('obj1', obj1);
console.log('obj2', obj2);


obj2 = {
    skill: 'fullstack'
}
console.log('obj1', obj1);
console.log('obj2', obj2);



let obj1 = {
    username: 'Abhinav',
    role: 'ins'
}

let username = obj1.username
console.log('obj1', obj1);
console.log('username', username);

obj1.username = 'Aswath'

console.log('obj1', obj1);
console.log('username', username);



// value and ref types comparison
// value types

let a = 20
let b = a

console.log(b === 20);
console.log(b === a);
a= 30
console.log(b === a);

// ref types
let obj1 = {
    user: 'abhinav'
}
let obj2 = {
    user: 'Abhinav'
}

// memory addresses are compared
console.log(obj1 == {user: 'Abhinav'}); //false
console.log(obj1 == obj2); //

let obj3 = obj2
console.log(obj2 === obj3);


// spread and rest operators
// ES5 --> Ecma script 5 --> older version
// ES6 --> newer version

let arr = ['Aswath', 'Kunal', 'Ujjwal'];


// to copy an array
let studentArr = [...arr];

console.log('arr', arr);
console.log('studentArr', studentArr);
// let student1 = arr[0]
// let student2 = arr[1]
// let student3 = arr[2]
arr.push('Kamal')
console.log('arr', arr);
console.log('studentArr', studentArr);
console.log(...arr);
console.log(arr);
*/

let stGroup1 = ['Aswath', 'Kunal', 'Ujjwal'];
let stGroup2 = ['Kamal', 'Adarsh', 'Hritik'];

let allStudents = [...stGroup1, 'Moushami', ...stGroup2, 'Vishal'];
console.log(allStudents);