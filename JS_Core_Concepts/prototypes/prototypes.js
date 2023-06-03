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
*/


// function constructor
function Person(firstName, lastName){
    this.firstName = firstName,
    this.lastName = lastName
}

Person.prototype.printFullName = function(){
    return `My full Name is ${this.firstName} ${this.lastName}`
}

// why did we added printFullName in prototype

function Player(fNAme, lName, occupation, level){
    // this.firstName = fNAme,
    // this.lastName = lName
    // a way to call person and pass fNAme and lName
    // a way to pass the context for which we want firstname and last name
    Person.call(this, fNAme, lName);
    this.occupation = occupation,
    this.level = level
}
Player.prototype = Object.create(Person.prototype)
// cricketplayer --> experties, game-> cricket

const person1 = new Person('Shubham', 'Kumar');
console.log(person1);
console.log(person1.printFullName());

const person2 = new Person('Aswath', 'Kumar');
console.log(person2);
console.log(person2.printFullName());

const player1 = new Player('Shubham', 'Kumar', 'play', 'national');
console.log(player1);
console.log(player1.printFullName());

const player2 = new Player('Ujjwal', 'Kumar', 'coach', 'state');
console.log(player2);
console.log(player2.printFullName());

const player3 = new Player('Dinesh', 'Kumar', 'play', 'international');
console.log(player3);
console.log(player3.printFullName());


// extends 
// property descriptors


let obj = {
    username: 'abhinav'
}

