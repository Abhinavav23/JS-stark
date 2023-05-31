// this keyword is a reference to a single object(current obj/current context);
// Global Environment
/*
var a= 10;
console.log(window.a);

this.x = 10000;

console.log(window.x);


// this ---> window

// default binding
// window.alert('my alaert');
// alert('my alaert');
// function printName(){
//     console.log('Name');
//     console.log(this.x);
// }

// this.printName();
// printName();
// console.log(this.printName);


// console.log(window);

// implicit binding
let user = {
    username: 'Abhinav',
    address: 'India',
    country: 'India',
    // method printName
    printName: function(){
        console.log('print inside user');
        console.log(this); //user
        console.log(this.username);
        // console.log(this.printAddress);
        // this.printAddress();
        // this.printCountry();
        const myArrowFunction = () => {
            console.log(' running myArrow function');
            console.log(this); //user
            const myArrowFuncLevel2 = () =>{
                console.log('myArrowFuncLevel2');
                console.log(this); //user
            }
            myArrowFuncLevel2();
        }
        myArrowFunction();
    },
    printAddress: () => {
        let a = 10;
        let b =30
        let c = a*b
        console.log('print address inside user arrow function');
        console.log(this); //Window
    },
    printCountry: function(){
        console.log('printCountry');
        console.log(this);
    }
}

// console.log(user.username);
// incase of normal function this keyword inside the function points to caller
user.printName(); //implicit binding
// user.printCountry();
// user.printAddress(); //this keyword points to its environment / lexical environment

// Arrow functions --> 
// this keyword points to environment/where the code is running
// arrow functions doesnt have their own this but they take it from environment


let a = 200;

// if(bdfvdvf){

// }


// var username = 'user';
this.username = 'global user';
// this.username = 'user'
let user = {
    username: 'Abhinav', //91
    printName: function(){
        // console.log(this);
        console.log('printName', this.username); // Abhinav
        const print1 = () => {
            console.log('print1', this.username); // Abhinav
        }
        var mythis = this // pain points
        let a = 100
        function print2(){
            console.log('print2', this.username); // window --> user
            console.log('print2', mythis.username); //user --> Abhinav
        }
        print1();
        print2(); //normal function--> window
    },
    printName2: () => {
        console.log('printName2', this.username); //
    }
}

user.printName();
user.printName2();



function User(name, address, birthYear){
    this.name = name;
    this.address = address;
    this.birthYear = birthYear;
   
    // this.calculateAge = function(){
    //     console.log('calculating age');
    //     return 2023- birthYear
    // }

    //abstraction of calculate age method
    // calculate age is private method of User Function
    // current year is a private variable of Function USer
    let currentYear = 2024;
    let calculateAge = function(){
        console.log('calculating age');
        return currentYear- birthYear
    }
    this.age = calculateAge();
}

const user1 = new User('Suraj', 'India', 1998);
// const age = user1.calculateAge();
// console.log(age);
// console.log(user1.calculateAge);
console.log(user1.age);



// getters and setters in Objects

let user = {
    firstname: 'Abhinav', //properties
    middlename: '',
    lastname: 'kumar', //
    // method
    getFullName: function(){
        return `${this.firstname} ${this.lastname}`
    },
    // getter method which can be accessed like a property
    get fullName(){
        console.log('getting my name');
        return `${this.firstname} ${this.middlename} ${this.lastname}`
    },
    set fullName(fName){
        console.log(fName);
        const res = fName.split(' ');
        console.log(res);
        this.firstname = res[0];
        this.middlename  = res[1];
        this.lastname = res[2];
    }
}


// console.log(user.getFullName());
// console.log(user.fullName);
user.fullName = 'Mahedra singh Dhoni'
console.log(user.firstname);
console.log(user.middlename);
console.log(user.lastname);

// test(hbsdfjvjbsf);

// Date Object

console.log(Date);
// returns the time as of the code is executing
let date1 = new Date();
console.log(date1);

// 1 Jan 1970 00:00:00 GMT
// number --> miliseconds --> 1000 milisecond = 1 sec
console.log('');
let date2 = new Date(100); //milisecond

let day = 1000*60*60*24;
let timeInMili = day*30*12*10 //3600 days
console.log(timeInMili);

// only one argument and type is number ---> miliseconds
let date3 = new Date(timeInMili); //milisecond
console.log(date2);
console.log(date3);


let date4 = new Date(-timeInMili);
console.log(date4);

// 2010
// month - 01
// date - 01
//  time 00:00:00 in GMT/UTC
// YYYY-MM-DD HH:MM:SS
// Js validates the input and returns invalid date if there is 
// wrong value passes
// at least you have to pass year value
// 2030/02/18
let date5 = new Date('2030-02-20 10:59:33');
console.log(date5);

// multiple arguments
// 1st -> year value
// 2nd --> month --> starts from 0
// 3rd --> date
// 4th --> HH
// 5th --> min
// 6th --> ss
// 7th --> miliseconds

let date6 = new Date(2013, 4, 15, 34, 85, 83, 83); //11: 26 : 23
console.log(date6);


const today = new Date();
console.log(today);
console.log(today.getTime()); //returns time in mili sec staring 1 jan 1970
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDay()); //days from week starting from 0 (SUN)
console.log(today.getDate()); //days from week
console.log(today.getMinutes()); //days from week
*/
console.log(Date.now());
let i =0
while(i< 10000000){
    i++
}
console.log(Date.now());
console.log(Date.now());






// implement your own date functionality
function myDate(...params){


}











