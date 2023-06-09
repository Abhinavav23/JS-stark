/*
// function Person(name, address){
//     this.name  = name,
//     this.address = address
    // this.printInfo = function(){
    //     console.log(`my name is ${this.name} and address is ${this.address}`);
    // }
// }

// const person1 = new Person('Kunal', 'India');


// diff way of writing function constructor
// syntactic sugar to function constructor / way to write object oriented code
// 'use strict'
class Person{
    // can only be accessed by the class not by its instances
    static defaultAddress = 'Earth';
    noOfLegs = 2
    constructor(name, address){
        this.name = name,
        this.address = address

        // this will get added to all the instances
        // this.printInfo = function(){
        //     console.log(`my name is ${this.name} and address is ${this.address}`);
        // }
    }
    // don't use function keyword
    // it gets added on the prototype by default
    // by default class runs the code in strict mode in JS
    printInfo(){
        console.log(this);
        console.log(`my name is ${this.name} and address is ${this.address}`);
    }

    static printDefaultAddress(){
        // console.log(this);
        // console.log(`by default i live on ${this.defaultAddress}`); //undef
        console.log(`by default i live on ${Person.defaultAddress}`);
    }
}
// classes are internally nothing but function
// console.log(typeof Person);

const person1 = new Person('Ujjwal', 'India');
// console.log(person1.name);
// console.log('');
// console.log(person1);
// person1.printInfo();
// console.log(person1.defaultAddress);

console.log('');

const person2 = new Person('Aswath', 'India');
// console.log(person2);
// person2.printInfo();
// console.log(person2.address);

// static property 
// console.log(person2.defaultAddress);
console.log(Person.defaultAddress);

// person2.printDefaultAddress();
// console.log(person2.printDefaultAddress);

Person.printDefaultAddress();


// we creating a new property on the object
// person2.defaultAddress = 'Marsh';
// person2['defaultAddress'] = 'Marsh';
// console.log(person2.defaultAddress);
// console.log(person2);




// storing the method in a variable
const myFunc = person2.printInfo;
// console.log(myFunc);
// myFunc()

// let obj = {
//     username: 'abhinav'
// }
// console.log(obj.address);



class Vehicle{
    type = 'on road';
    category = 'general';
    constructor(name, price){
        this.name = name,
        this.price = price
    }

    // getInsuranceCharges(){
    //     let insurancePercent = 0.05
    //     if(this.name.length>6){
    //         insurancePercent = 0.1
    //     }
    //     return this.price*insurancePercent
    // }

    // reading purpose --> custom code
    get insuranceCharges(){
        let insurancePercent = 0.05
        if(this.name.length>6){
            insurancePercent = 0.1
        }
        return this.price*insurancePercent
    }

    // writing purpose --> some custom code
    set insuranceCharges(amount){
        console.log('insurance amount--->', amount);
        if(amount>500000){
            this.category = 'expensive'
        }
        console.log(`your on road price ${this.price+amount}`);
    }

}

const vehicle1 = new Vehicle('Creta', 1500000);
console.log(vehicle1.name);
console.log(vehicle1.price);
// console.log(vehicle1.getInsuranceCharges());
console.log(vehicle1.insuranceCharges);
vehicle1.insuranceCharges = 100000;
console.log(vehicle1.category);

console.log('');
const vehicle2 = new Vehicle('BMW', 5500000);
vehicle2.insuranceCharges = 600000;
console.log(vehicle2.category);



class Vehicle{
    category = 'general';
    constructor(name, price){
        console.log('Vehicle constructor called');
        this.name = name,
        this.price = price
    }

    getDetails(){
        console.log(`my vehicle is ${this.name} and i bought it for ${this.price}`);
    }
}

const vehicle1 = new Vehicle('honda', 120000);
vehicle1.getDetails();

class Bike extends Vehicle{
    constructor(name, price, noOfWheels, mileage){
        console.log('bike constructor called');
        super(name, price);
        this.noOfWheels = noOfWheels,
        this.mileage = mileage
    }

    calculateMilage(){
        console.log(`mileage is 30kmpl`);
    }

    // method overriding 
    getDetails(){
        console.log(`my bike name is ${this.name} and i bought it for ${this.price}`);
        console.log(`my bike's mileage is ${this.mileage}kmpl and it has ${this.noOfWheels} wheels`);
    }
}

const bullet = new Bike('RE Bullet', 175000, 2, 20);
console.log(bullet);
console.log(bullet.name);

bullet.calculateMilage();
bullet.getDetails();
*/


// private properties in class

class Student{
    static contestDate = '10 June'
    // private property of student class
    #_instructor = 'Abhinav'
    constructor(name, batch){
        this.name = name,
        this.batch = batch
    }

    statusOfStudent(){
        // let instructor = 'Abhinav';
        if(this.batch === 'stark'){
            console.log(` batch is running and topic is FSD`);
        } else{
            console.log(`we don't have much info about the batch`);
        }
    }

    totalClassesInWeek(){
        if(this.#_instructor === 'Abhinav'){
            console.log('there are 5 classes in a week');
        }else{
            console.log(`there are 6 classes in  week`);
        }
        this.#getTimings();
    }

    // private method of student class
    #getTimings(){
         console.log(`9 to 11 pm`);
    }
}

const subham = new Student('Shubham', 'stark');
// console.log(subham.name);
// console.log(subham.batch);
// subham.statusOfStudent();
// console.log(subham._instructor);
subham.totalClassesInWeek();
// console.log(subham.getTimings());

const kamal = new Student('Kamal', 'stark');
// console.log(Student._instructor); //undefined
// console.log(kamal.contestDate);
// console.log(Student.contestDate);
// console.log(Student.instructor);


















// function test(){
//     // ddfvdf
// }

// const test = () => {

// }

// function test(){
//     // ddfvd b ccghchgchgc b b
// }


let a = 200;
// console.log(a);

function myFunc(){
    let x = 50;
    console.log(a);
    console.log(x);

    function inner(){
        console.log(a);
        console.log(x);
    }
    inner()
}

// console.log(x);