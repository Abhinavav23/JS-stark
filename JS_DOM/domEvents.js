const printAddButton = document.getElementById('print-address');
const printRoleButton = document.getElementById('print-role');
const printNameAndAddBtn = document.getElementById('prNameAndAdd');
const nameInput = document.getElementById('username');
const addressInput = document.getElementById('address');

// console.log(printNameAndAddBtn);
// console.log(printAddButton);
// console.log(printRoleButton);

function PrintAddress() {
    console.log('My Address is Delhi');
}

function PrintRole() {
    console.log('I am a developer');
}

function hoveringOverEl(){
    console.log('hovering');
}

function movingMouseOut(){
    console.log('moving out');
}

// printAddButton.addEventListener('click', () => {
//     console.log('My Address is Delhi');
// })

printAddButton.addEventListener('click', PrintAddress);
printAddButton.addEventListener('mouseover', hoveringOverEl);

printRoleButton.onclick = PrintRole
printRoleButton.onmouseover = hoveringOverEl
printRoleButton.onmouseout = movingMouseOut


// event listener or Event handler
function printName(){
    console.log('my name is Abhinav');
}

function printNameAndAdd(){
    console.log(`My name is ${nameInput.value} and my address is ${addressInput.value}` );
    nameInput.value=''
    addressInput.value=''

    // to call server and validate the username and password
}

    console.log(nameInput);
printNameAndAddBtn.addEventListener('click', printNameAndAdd)
