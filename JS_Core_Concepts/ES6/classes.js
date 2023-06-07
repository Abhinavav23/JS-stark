// function Person(name, address){
//     this.name  = name,
//     this.address = address
    // this.printInfo = function(){
    //     console.log(`my name is ${this.name} and address is ${this.address}`);
    // }
// }

// const person1 = new Person('Kunal', 'India');


// diff way of writing function constructor
// syntactic sugar to function constructor

class Person{
    constructor(name, address){
        this.name = name,
        this.address = address

        // this will get added to all the instances
        // this.printInfo = function(){
        //     console.log(`my name is ${this.name} and address is ${this.address}`);
        // }
    }
    // dont use function keyword
    // it gets added on the prototype by default
    printInfo(){
        console.log(`my name is ${this.name} and address is ${this.address}`);
    }
}

const person1 = new Person('Ujjwal', 'India');
console.log(typeof Person);
console.log(person1);
person1.printInfo()

const person2 = new Person('Aswath', 'India');
console.log(person2);
person2.printInfo();


