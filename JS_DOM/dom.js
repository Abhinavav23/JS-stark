
// BOM --> Browser object model
console.clear();

console.log('starting dom');
console.warn('info');
console.error('error occured')

console.log([1,2,3,4,5]);
console.table([1,2,3,4,5]);

console.log(window.console);
console.log(window.document);
// alert('Hi this is me'); //show some message to user

//to get confirmation about something --> true or false
let userChoice = confirm('Are you sure you want to go back?'); 
// console.log('getting user input');
// console.log(userChoice);


// can be used to get input from user
let value = prompt('Enter your name')

console.log(value);