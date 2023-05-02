// create a function which will give the result based on student marks
/*
function calculateResult(marks){
    // if marks > 80 --> distinction
    // if marks > 60 and <80 ---> first 

    if(marks<0){
        console.log('marks cant be less than 0');
        return
    }
    if(marks>100){
        console.log('marks cant be more than 100')
        return
    }

    // if(marks<0 || marks>100){
    //     console.log("not a valid mark");
    // }

    if(marks>80){
        console.log('Student passed with Distinction');
        // return "Distinction Marks"
    }else if(marks>60){
        console.log('Student passed with first division');
    } else if(marks > 45){
        console.log('Student passed with second division');
    }else if(marks > 30){
        console.log('Student passed with third division');
    } else{
        console.log('Student failed');
    }

    // if(marks>= 80 && marks<100){
    //     // 
    // }

    // if(marks >=60 && marks<80){
    //     // 
    // }
}

calculateResult(65);
calculateResult(85);
calculateResult(35);
calculateResult(55);
calculateResult(25);
calculateResult(-25);

calculateResult(125);

// 80-100 --> distinction


// loops --> to perform repeated tasks
// for loop

// for(initialization; condition check; statement to end the loop)
// step - 1 initialization --> happens only once
// 2. condition check- if true --> execute loop body --> else exit the loop
// 3. run the staement afterwards
// loop body


// for(var i =20; i>10; i-=2){
//     console.log(i);
// }

for(var i =20; i>10;){
    i-=2
    console.log(i);
}

// task -> how many multiples of 2 in 1024

console.log('outside the loop',i);

var a =0

while(a>0){
    console.log('a-->', a);
    a--
}

do{
    console.log('a-->', a);
    a--
}while(a>0)

console.log(a);

const arr = [10, 40, 59, 57, 30];

const user = {
    username: 'Abhinav',
    email: "abhinav@mail",
    instructor: true,
    noOfBatches: 1
}

for(let a in arr){
    console.log('index---> ', a);// --> the index of the array
    console.log('value --->', arr[a]);
}

for(let b in user){
    console.log('key---> ', b);// --> the index of the array
    console.log('value --->', user[b]);
    // console.log('value --->', user.b); --> wont work
}

console.log(user.username);


const arr = [10, 40, 59, 57, 30];

// for in is for object and for of is for array

for(let a of arr){
    console.log(a);
}
*/

const arr = [10, 40, 29, 57, 30];

// console.log(arr.length);

// break and continue

// break --> exit the loop immidiately

// finding a value(59) in arr 
// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
//     if(arr[i] === 59){
//         console.log('value found');
//         break
//     }
// }

// continue --> used to skip a iteration
// log only numbers greater than 30

for(let i = 0; i<arr.length; i++){
    console.log('start', i);
    if(arr[i]<30){
        continue
    }
    console.log('element is ', arr[i]);
}

