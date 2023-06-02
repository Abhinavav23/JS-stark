/*
let user1 = {
    firstName: 'Abhinav',
    lastName: 'Kumar',
    getFullName: function(){
        console.log(this);
        return `${this.firstName} ${this.lastName}`
    },
    // getAddress: function(){

    // }
}

// console.log(user1.getFullName);
// user1.getFullName();

this.city = 'global city';
this.country = 'global country';

function getAddress(pin, continent){
    console.log(`Address - ${this.city}, ${this.country}-${pin} is in ${continent}`);
}

let user2 = {
    firstName: 'Kunal',
    lastName: 'Anil',
    city: 'Delhi',
    country: 'India'
    // fullName: user1.getFullName.call(this),
}
// console.log(user2.fullName);

let user3 = {
    firstName: 'Ujjwal',
    lastName: 'kumar',
    city: 'Bangalore',
    country: 'India'
}
//borrowing of functions 
// value of this keyword is passed from outside based on requiremrnts
// 1. to access the method
// 2. to call the method
// to call the function with another reference we use call method
// 1st argument --> this ref
// next arguments will go to the function

// user1.getFullName();
// user1.getFullName.call(user2);
// user1.getFullName.call(user3);

// user2.getAddress() ---> not possible 
const resOfGetAdd = getAddress.call(user2, 10060, 'Asia');
console.log('resOfGetAdd', resOfGetAdd);
// getAddress.call(user3, 56100, 'Asia');

// exact similar to call
// 1st argument --> this ref
// 2nd argument --> array of argument
// getAddress.apply(user2, [10060, 'America']);

// var todaysDate = new Date()
// console.log( todaysDate.toLocaleString() );

// bind method
// unlike call and apply bind doent call the function directly
// bind returns us a copy of function with all the parameters and this keyword attached which can be called later
const resofGetAddBind = getAddress.bind(user2, 10060);
console.log('resofGetAddBind', resofGetAddBind);
resofGetAddBind('USA');



function multiply(a,b,c){
    console.log(`Solved by: ${this.assignedTo} result for problem no: ${this.problemno} is ${a*b*c}` );
    return a*b*c
}

const problemA = {
    assignedTo: 'Abhinav',
    problemno: 19,
}

let res1 = multiply(10,5); //NAN
console.log(res1); //50
let res2 = multiply.call(problemA,10,5,4);
console.log(res2); //50

// const res3 = multiply.bind(problemA,10,4,3); 
// res3();
// const res3 = multiply.bind(problemA,10,4); 
// res3(3);
// const res3 = multiply.bind(problemA); 
// res3(4,3);
*/

function multiply(a,b){
    console.log(`Solved by: ${this.assignedTo} result for problem no: ${this.problemno} is ${a*b}` );
    return a*b
}

const problemA = {
    assignedTo: 'Abhinav',
    problemno: 19,
}

const TenthMultiplier = multiply.bind(problemA,10);
const Multiplier26 = multiply.bind(problemA,26);

TenthMultiplier(5); //50
TenthMultiplier(7); //70

Multiplier26(5); 