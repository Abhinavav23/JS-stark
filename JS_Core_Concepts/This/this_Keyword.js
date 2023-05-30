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

*/

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

test(hbsdfjvjbsf)



