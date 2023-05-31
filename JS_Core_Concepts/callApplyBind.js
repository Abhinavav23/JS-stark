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
    console.log(`${this.city}, ${this.country}-${pin} is in ${continent}`);
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
// value of this keyword is changed
// 1. to access the method
// 2. to call the method
// to call the function with another reference we use call method
// 1st argument --> this ref
// next arguments will go to the function

user1.getFullName.call(user2);
user1.getFullName.call(user3);

// user2.getAddress() ---> not possible 
getAddress.call(user2, 10060, 'Asia');
getAddress.call(user3, 56100, 'Asia');

// exact similar to call
// 1st argument --> this ref
// 2nd argument --> arr of argument
getAddress.apply(user2, [10060, 'America']);


var todaysDate = new Date()
console.log( todaysDate.toLocaleString() );