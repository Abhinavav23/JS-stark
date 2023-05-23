
/*
function gradParent(){
    let a = 100;
    let d = 400
    function parent(){
        let b = 130;
        function child(){
            let c = 20
            console.log(a);
            console.log(b);
            console.log(c);
            console.log(d);
        }
        return child;
    }
    return parent
}

const res = gradParent();
console.log(res); //parent fun
// parent got removed from call stack
const resFun = res();
console.log(resFun);
resFun()

// console.log('this is my log');

// function test() {
//     console.log('tstn is running ');
// }
// test();

// closures(parent) ---> b
// closures(grandParent) --> a
*/


function addAndPrintNumber(){
    let no = 0;
    function addNumber(noToAdd){
        // let no = 0
        no = no+noToAdd
        console.log(no);
    }
    return addNumber
}

const addNo = addAndPrintNumber(); // no
addNo(20); //20
addNo(50); // 70
addNo(60); // 130
addNo(2000); // 2130

const addNoAgain = addAndPrintNumber(); // no
addNoAgain(30); // 
addNoAgain(100); // 






