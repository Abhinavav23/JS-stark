/*
Array.prototype.elementType = 'returns element type of array'
Array.prototype.maxLength = 100
let arr = [1,5,9,34]

arr.push(10);
console.log(arr);
arr.elementType = 'returns element type of array'
console.log(arr.length);

console.log(arr.__proto__);
console.log(arr instanceof Array);
console.log(arr instanceof Object);
console.log(arr.elementType);
// arr.ppuush()


let arr2 = ['abhinav', 'Suraj', 'Harsh'];
console.log(arr2);
console.log(arr2.elementType);


let arr3 = [true, '100', 100];
console.log(arr3.elementType);
console.log(arr3.maxLength);

Object.prototype.length = 300;

let obj = {
    address: 'India',
    // length: 50
}
console.log(obj);

let obj1 = {
    name: 'myname'
}
console.log(obj.length);
// console.log(obj.__proto__);
console.log(obj1.length);

// prototype --> establishes a inheritance mechanism when we create anything in javascript like array objects functions
// it works through something called as prototype chain which can be accessed using __proto__ property 
// prototypical inheritance

// multiple inheritance and multi level inheritance


let person = {
    firstName: 'Abhinav',
    type: 'Person',
    getInfo: function(){
        console.log('I am a person');
    }
}

let player = {
    occupation: 'play',
    level: 'state',
    getPlayerInfo: function(){
        console.log('I am a player who can play at state level');
    }
}

let actor= {
    occupation: 'act',
    genre: 'Action',
    getActorInfo: function(){
        console.log('I am an actor who can act in action movies');
    }
}
// should not do --> not recommended
// player.__proto__ = person;
Object.setPrototypeOf(player, person);

console.log(player);
console.log(player.type);
player.getPlayerInfo();
player.getInfo();

// actor.__proto__ = person
// 1st --> whose prototype needs to set
// 2nd --> what to set
Object.setPrototypeOf(actor, person);
// console.log(actor.type);

let cricketPlayer = {
    game:'cricket',
    skills: 'batting'
}
// cricketPlayer.__proto__ = player
Object.setPrototypeOf(cricketPlayer, player);

console.log(cricketPlayer);
console.log(cricketPlayer.game);
console.log(cricketPlayer.occupation);
console.log(cricketPlayer.type);
// console.log(cricketPlayer.__proto__);
let protoTypeOfCri = Object.getPrototypeOf(cricketPlayer);
console.log(protoTypeOfCri);



// we are trying to implement our own prototypal/protypical inheritance
// function constructor
function Person(firstName, lastName){
    this.firstName = firstName,
    this.lastName = lastName
    // this.printFullName = function(){
    //     return `My full Name is ${this.firstName} ${this.lastName}`
    // }
}

Person.prototype.printFullName = function(){
    return `My full Name is ${this.firstName} ${this.lastName}`
}

// why did we added printFullName in prototype

function Player(fNAme, lName, occupation, level){
    // this.firstName = fNAme,
    // this.lastName = lName

    // 1. get all the properties from Person --> call Person()
    // 2. create only one object  --> cant use new while calling Person
    // 3. we want same instance or object to have properties from player and Person
    // 4. we need some way to pass the ref to Person Function or call the Person with same ref
    // 5. to use call method available on functions

    // a way to call person and pass fNAme and lName
    // a way to pass the context for which we want firstname and last name

    // calling parent constructor 
    Person.call(this, fNAme, lName);
    this.occupation = occupation,
    this.level = level
    // this.printPlayerInfo = function(){
    //     return `I am a ${this.occupation} and my level of play is ${this.level}`
    // }
}


Player.prototype = Object.create(Person.prototype);
// reset the constructor
Player.prototype.constructor = Player;
// add property on prototypes
Player.prototype.printPlayerInfo = function(){
    return `I am a ${this.occupation} and my level of play is ${this.level}`
}
// cricketplayer --> experties, game-> cricket

// const person1 = new Person('Shubham', 'Kumar');
// console.log(person1);
// console.log(person1.printFullName());

// const person2 = new Person('Aswath', 'Kumar');
// console.log(person2);
// console.log(person2.printFullName());

const player1 = new Player('Shubham', 'Kumar', 'player', 'national');
console.log(player1);
console.log(player1.printFullName());
// console.log(player1.__proto__.constructor)
console.log(player1.printPlayerInfo());

console.log(Object.keys(player1)); // it will give the properties available on instance
console.log(Object.values(player1)); // it will give the properties available on instance / instance members

// prototype properties will also be accessible sing for in loop
for(let key in player1){
    console.log('key --->', key);
}

const player2 = new Player('Ujjwal', 'Kumar', 'coach', 'state');
console.log(player2);
console.log(player2.printFullName());
console.log(player2.printPlayerInfo());


const player3 = new Player('Dinesh', 'Kumar', 'play', 'international');
console.log(player3);
console.log(player3.printFullName());


// extends 
// property descriptors


// let obj = {
//     username: 'abhinav'
// }

// obj.address = 'India'

// obj = {
//     myname: 'abhi'
// }


// avoid extending built in objects

let arr1 = [1,4,6,8]

arr1.push(30)
console.log(arr1);
console.log(Array.prototype.push);

// in case of writing polyfills
// check is a specific property is available if not then write your own implementations
if(!Array.prototype.push){
    Array.prototype.push = function(val){
        console.log('value to be pushed is ', val);
    }
}


arr1.push(100)
console.log(arr1);

let arr2 = [3,7,0]
arr2.push(50);
console.log(arr2);

*/
// Polymorphism  --> which exist in many forms
// 

console.log(test); //execution phase

function test(){
    console.log('running test');
}

function test(){
    console.log('running overridden test');
}

test();

const testAgain = function(){
    console.log('testagain');
}

// const testAgain = function(){
//     console.log('test again overridden');
// }

// function Person(username, age){
//     this.username = username,
//     this.age = age
//     this.printDetails = function(){
//         console.log(`my name is ${this.name} and my age is ${this.age}`);
//     }
// }

// function Player(username, age, game, retireAge){
//     Person.call(this, username, age)
//     this.game = game,
//     this.retireAge = retireAge
//     this.printDetails = function(){
//         console.log(`my game is ${this.game} and my retire age is ${this.retireAge}`);
//     }
// }

// const player1 = new Player('Abhinav', 30, 'cricket', 38);
// console.log(player1);
// player1.printDetails()

