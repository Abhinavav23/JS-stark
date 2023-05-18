const mainEl = document.querySelector('main');
const sectionEl = document.querySelector('section');
const buttonEl = document.querySelector('button');
// console.log(mainEl);
// console.log(sectionEl);
// console.log(buttonEl);

// when we click on the inner most element it starts from inner element 
// and it goes all the way to the parent most element 
// which is called as bubbling
// bubbling is by default nature

// vice versa of bubbling is called capturing

// arguments
// 1. event name
// 2. handler callback function
// 3. useCapture --> true --> capturing || false --> bubbling
// by default behaviour is bubbling or usecapture value is false

mainEl.addEventListener('click', () => {
    console.log('clicked n main element');
}); // bubbling

sectionEl.addEventListener('click', (event) => {
    console.log(event.cancelable);
    // console.log(event.target);
    // event.stopPropagation();
    // this actually cancels the execution of of any default behaviour for that event
    // cacelable property decides if we would be able to cancel the default behaviour
    // event.preventDefault();
    console.log('clicked n section element');
}, true) //capturing


function buttonHandler(event){
    // event.stopPropagation();
    // event.stopImmediatePropagation()
    console.log('clicked n button element');
} //bubbling

// buttonEl.addEventListener('click', (event) => {
//     console.log(event);
//     console.log('clicked n button element');
// })
function buttonHandler2(event){
    // event.stopPropagation();
   
    console.log('clicked n button element again');
} //bubbling

buttonEl.addEventListener('click', buttonHandler)
buttonEl.addEventListener('click', buttonHandler2)

// function addEventListener(eventName, callbackFn, usecapture=false){

// }

// capturing -->
// main ---> capturing --> 1st step --> while going
// section --> bubbling --> coming back --
// button --> capturing --> 3 step --> while going --------Destination means target element

// bubbling
// button ---> 
// section --> lets execute ---> 
// main --> 

// main
// button
// section