
/*
const arr = [1,4,5,65,43];
console.log(arr);
console.log(arr[3]);

console.log(arr.at(3));
// length
console.log(arr.length);
console.log(arr[0]);
// const lastIndex = arr.length-1
console.log(arr[arr.length-1]);

// operations on arrays
// for inserting an el

// push --> changes the original array
// insert from end
console.log(arr);
arr.push(58);
let res = arr.push(56, 78);
console.log('res', res); //updated length 
console.log(arr);



// pop --> changes the original array
console.log(arr);
let res = arr.pop();
console.log('res', res);
console.log(arr);

// unshift -> changes the original array
// insert from top
console.log(arr);
let res = arr.unshift(23, 89);
console.log('res', res); //updated length
console.log(arr);



// unshift -> changes the original array
// remove from top
console.log(arr);
let res = arr.shift();
console.log('res', res);
console.log(arr);

// update the values at diff indexes by assigning the value
arr[0] = 33
console.log(arr);
// let a = [10]
// a = [20]

// const b = [10, 20]
// b = [20];

// concat --> doesnt change original array
// returns a new Array
const arr1 = [1,2,3]
const arr2 = [2,3,4]
const arr3 = [4,7,8]

let newArr = arr1.concat(arr2, arr3);
console.log(newArr);

console.log(arr1);
console.log(arr2);


const arr1 = [1,2,3]

let joinRes = arr1.join("0");
console.log(joinRes);
console.log(arr1); //array didnt changed

arr1.reverse(); //changes original array
console.log(arr1); 
arr1.reverse()
console.log(arr1);



// ----check existance of an element in array------

const arr1 = [1, 2, 34, 66, 54, 2, 67, 2, 45, 67, 8]

// let res1 = arr1.includes(2);
// let res2 = arr1.includes(2, 4);
// console.log(res1); //true
// console.log(res2); //false

// if found then return index
// else return -1
// second argument can be given to start search from an index
let res1 = arr1.indexOf(2); //search starts from 0th index

let res2 = arr1.indexOf(2,4);

console.log(res1);
console.log(res2);

let res3 = arr1.lastIndexOf(2);
console.log(res3);


let res4 = arr1.toString();
let no = 124
console.log(typeof res4);
let str = no.toString()
console.log(no);
console.log(typeof str);

let obj = {
    name: 'Abhi'
}
let objRes =  obj.toString();
console.log(objRes);



// original array is not modified
// slice return a new array
// args --> start index, end index
let arr = [34,67,89,54,60]

// let slicedArr = arr.slice(1,4);
// let slicedArr = arr.slice(3,4);
// let slicedArr = arr.slice(3,3);
// let slicedArr = arr.slice(2);
let slicedArr = arr.slice(); //start from 0 go till end
console.log(slicedArr);
console.log(arr);

let slicedWithNeg = arr.slice(-4);
console.log(slicedWithNeg);
console.log(arr);



// original array is modified
// args --> start index, no of el
let arr = [34,67,89,54,60, 80];

// removing the element from an array
// let slicedArr = arr.slice(2,4);
// let splicedArr = arr.splice(2,4);
let splicedArr = arr.splice(-5,4);
// console.log(slicedArr); //89 54
console.log(splicedArr); // 
console.log(arr);

*/

let arr = [20, 30, 70] //[20, 30, 40, 50, 60]

arr.splice(2,0, 40, 50, 90);
console.log(arr);

arr.splice(4,1, 60);
console.log(arr);





