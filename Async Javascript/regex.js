/*
const str1 = 'test'

const str2 = `string`
console.log(str1);
console.log(str2);

const regEx = /tEStInG/i

// i --> ignore case

const str3 = 'This is my testing string Testing'

// strings are immutable

// returns a boolean value
const res1 = regEx.test(str3);
console.log(res1);

// returns an array 
// with all diff source of information
const res2 = regEx.exec(str3);
console.log(res2);


// match
const res3 = str3.match(regEx);
console.log(res3);

// replace
const res4 = str3.replace(regEx, 'developing');
console.log(res4);
console.log(str3);


// some special symbols in regEX
// starting with some char
// const regEx1 = /^abhi/i
// const regEx = /abhi$/i
// const regEx = /^abhi$/i
// const regEx = /a...v/i 
// const regEx = /a*v/i 
// const regEx = /a[0-9]v/i 
// const regEx = /a[a-zA-Z]v/ 

const regEx = /av{3}i/i 



// console.log(regEx.test('Abhinav'));
console.log(regEx.test('ghgvhgvavvvigjhgjhbjh'));
// console.log(regEx.test('Aarav'));
// console.log(regEx.test('tRabhi'));
// console.log(regEx.test('abhishek'));



// currying
const multiply = (a,b) => {
    return a*b
}
this.x = 100;

const tenMultiplier = multiply.bind(this, 10);
console.log(tenMultiplier(5));

const FiftySevenMutiplier = multiply.bind(this, 57);
console.log(FiftySevenMutiplier(8));
*/

const multiply = (x) => {
    return (y) => {
        return x*y
    }
}

const sum = (x) => {
   return (y) => {
    return (z) => {
        return x+y+z
    }
   }
}

const tenMultiplier = multiply(10);
console.log(tenMultiplier(5));

console.log(multiply(10)(23));

console.log(sum(2)(3)(6));


const sumRec = (x) => {
    return function(y) {
       if(y){
        return sumRec(x+y)
       }
       return x
    }
}


console.log(sumRec(2)(4)()); //6
console.log(sumRec(2)(4)(6)(8)(10)()); //30

