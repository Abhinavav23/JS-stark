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
        twoMultiplier()
    }
    multiplication()
}
calculate();

// lexical scoping in function
// scope chaining

