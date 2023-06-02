let arr = [1,5,9,34]

arr.push(10);
console.log(arr);
console.log(arr.length);
console.log(arr.__proto__);
console.log(arr instanceof Array);
console.log(arr instanceof Object);
// arr.ppuush()

let obj = {
    address: 'India'
}

console.log(obj);
console.log(obj.__proto__);

// prototype --> establishes a inheritance mechanism when we create anything in javascript like array objects functions
// it works through something called as prototype chain which can be accessed using __proto__ property 
// prototypical inheritance

// multiple inheritance and multi level inheritance