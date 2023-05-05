/*
let a = 155;
console.log('in global', a);

function calculate(){
    let x = 40;
    console.log(x);
    console.log('inside calculate', a);

    function multiplication(){
        let z = 22
        console.log('inside multiplication', z);
        console.log('inside multiplication a is', a);

        function twoMultiplier(){
            let g = 446
            console.log(g);
            console.log(x);
        }
        twoMultiplier();
    }
    multiplication();
}
calculate();

// lexical scoping in function
// scope chaining



function GrandParent(){
    let gp = 300;
    console.log(gp);
    function parent(){
        let p = 50;
        console.log('p is ', p);
        console.log('gp is', gp);
    }
    parent();
    console.log(p);
    console.log(a);
}

GrandParent();

// console.log(r);

// let and const has block scope 


let a = 155;
console.log('in global', a);

if(a === 155){
    let var2 = 'somename'
    let var3 = 'var3'
    console.log(var2);
}

console.log(var1);
console.log(var2); //not accessible


// var has functional scope
// console.log(a); //undefined
// console.log(c); //

var a = 40
let c = 50

if(a === 155){
    let var3 = 'var3'
    var b = 'var4'
    console.log(var3);
    console.log(b);
}

console.log(b);
*/

let a = 20;
function test(){
    let a = 30;
    if(a===20){
        var b = 20
    }
    console.log(a);//30
    console.log(b);//undefined
}
test();
console.log(a);//20
// console.log(b); //error





/*
// block of code examples
if(a === 20){
    console.log('inside if');
    let a = 30
    let b = 50
    console.log(a*b);
} else{
    console.log('inside else');
    let x = 34
    let y = 50
    console.log(x+y);
}


for(let i = 0; i< 8; i++){

}




let b = 20;

let obj = {
    name: 'Abhinav'
}

let arr = []
*/