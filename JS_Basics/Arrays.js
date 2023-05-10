
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


let arr = [20, 30, 70] //[20, 30, 40, 50, 60]

arr.splice(2,0, 40, 50, 90);
console.log(arr);

arr.splice(4,1, 60);
console.log(arr);



// Looping with some operation
// multiply each el of the array by two
// return me the el multiplied by its index
let arr = [10,40,50,56,36,78]

function multiplyByTwo(no){
    return no*2
}

function sumWithIndex(no, index){
    return no+index
}

// for(let i = 0; i<arr.length;i++){
//     arr[i] = arr[i]*2
// }
// console.log(arr);

// map is a higher order func which takes a callback fun
// it calls the function for each of the element of the array
// fun also recieves the el as first parameters, index as 2nd, complete array as 3rd 
// we return the calculated res from the array which gets pushed into new array

let multipliedByTwoArr = arr.map((el) => {
    // console.log(el);
    // console.log('');
    return el*2
})

let multipliedWithItsIndexArr = arr.map((el, index, array) => {
    console.log(el);
    console.log(index);
    console.log(array);
    console.log('');
    return el*index
})

let result1 = arr.map(multiplyByTwo);
let result2 = arr.map(sumWithIndex);

// console.log('multipliedByTwoArr', multipliedByTwoArr);
console.log('multipliedWithItsIndexArr', multipliedWithItsIndexArr);
// console.log('original Arr', arr);
console.log(result1);
console.log(result2);


// filter --> same as map
// return a boolean value and only value return true for el gets pushed into new array
let arr = [2,33,50,25,38,55,66,3,9]

let resArray = arr.filter((el) => {
    return el>25
})
console.log(resArray);

// findIndex
// find
// some
// every
*/

let arr = [1,5,8,9]

//reduce 
// Q -> return sum of all the elements of array
// first par --> te el from array for first time
// sec par ---> second el from array

// from 2nd time onwards
// par1 --> returned res of previous fun call
// 
// let res1 = arr.reduce((par1, par2) => {
//     console.log('par1', par1); //1, 6, 14
//     console.log('par2', par2); //5, 8, 9
//     console.log('');
//     return par1+par2 //6, 14, 23
// })

// let res2 = arr.reduce((par1, par2) => {
//     console.log('par1', par1); // 10, 11, 16, 24
//     console.log('par2', par2); // 1, 5, 8, 9
//     console.log('');
//     return par1+par2 // 11, 16, 24, 33
// }, 10)


// console.log('res', res1);
// console.log('res', res2);

let newArr = [];
let res = arr.forEach((el, i, arr) => {
    newArr.push(el*i)
})
console.log(res);
console.log(newArr);


