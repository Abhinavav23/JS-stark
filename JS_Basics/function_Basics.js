console.log('functions');
/*
// set of code designed to perform any particular task are functions
// it also helps you acheive reusability / DRY principle



// 1 2 3 4 5

// --> average of 5 no and multiply the result with 1st no
// --> average of 5 no and divide the res with 1st no


// function declaration / function creation
// function --> keyword
// printMyName ---> function name
// inside curley braces --> function body
// while defining the function we accept function parameters
// while calling the function we pass arguments

function printMyName(){
    console.log('Hi My name is Abhinav!!');
}

// invocation / calling the function
printMyName();
printMyName();
printMyName();
printMyName();
printMyName();
*/


function averageOfThreeNo(no1, no2, no3){
    const sum  = no1+no2+no3 // 4040 // 103040
    console.log(sum, typeof sum); //string 
    // type coersion
    const avg = (no1+no2+no3)/3 // type of arithmatic operation
    console.log('average is ', avg);
    console.log('type of avg is ',typeof avg);
}

// averageOfThreeNo(10, 30, '40');
// averageOfThreeNo('10', 30, '40'); //
averageOfThreeNo(50, 30, 40); //


5*5 --> 55555
"5"*5 --> 55555
"5"*"5" --> 55555