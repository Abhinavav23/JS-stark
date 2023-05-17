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

mainEl.addEventListener('click', () => {
    console.log('clicked n main element');
});

sectionEl.addEventListener('click', () => {
    console.log('clicked n section element');
})

buttonEl.addEventListener('click', () => {
    console.log('clicked n button element');
})
