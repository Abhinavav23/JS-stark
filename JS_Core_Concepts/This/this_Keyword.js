// this keyword is a reference to a single object(current obj/current context);
// Global Environment
/*
var a= 10;
console.log(window.a);

this.x = 10000;

console.log(window.x);

*/
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
        console.log(this);
        console.log(this.username);
        // console.log(this.printAddress);
        this.printAddress();
        this.printCountry();
    },
    printAddress: () => {
        console.log('print address inside user arrow function');
        console.log(this);
    },
    printCountry: function(){
        console.log('printCountry');
        console.log(this);
    }
}

// console.log(user.username);
// incase of normal function this keyword inside the function points to caller
// user.printName(); //implicit binding
user.printCountry();
// user.printAddress(); //this keyword points to its environment / lexical environment

