/*
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


// console.log(window.document);
// console.log(document);

// document properties
console.log('URL', document.URL);
console.log('Head', document.head);
console.log('Title --->', document.title);
console.log('body --->', document.body);
console.log('images --->', document.images); //Js  obj which has a bundle of key value pairs
console.log('links --->', document.links); //Js  obj which has a bundle of key value pairs
console.log('links --->', document.forms); //Js  obj which has a bundle of key value pairs
console.log('links --->', document.scripts); //Js  obj which has a bundle of key value pairs


// Selectors in DOM

// select using id
// return single element
const googleLinkTag =  document.getElementById('google-link');
console.log(googleLinkTag);
const googleLinkTagQ = document.querySelector('#google-link');
console.log(googleLinkTagQ);


// select using tagname
// returns HTMLelement collection
const anchorTag = document.getElementsByTagName('a');
console.log(anchorTag);

// query selector can be used to select any element using any of its attributes --> id, tagname, className
// query selector by default selects the first match only
const anchorTagQ = document.querySelector('a');
console.log(anchorTagQ);


// select using tagname
// returns HTMLelement collection
const anchorTagUsingClassNAme = document.getElementsByClassName('google');
console.log(anchorTagUsingClassNAme);

const anchorTagUsingQ = document.querySelector('.google');
console.log(anchorTagUsingQ);

const anchorTagUsingQAll = document.querySelectorAll('.google');
console.log(anchorTagUsingQAll);



const inputEl = document.getElementsByTagName('input');
console.log(inputEl);


const inputNoEl = document.querySelector('input[type="number"]');
console.log(inputNoEl);

// if element not present on DOM
const sectionEl1 = document.querySelector('section'); //null
const sectionEl2= document.getElementsByTagName('section'); //[]
const sectionEl3= document.getElementById('myId'); //null

console.log(sectionEl1);
console.log(sectionEl2);
console.log(sectionEl3);



// select and modify the element
const mainElUsingTag = document.querySelector('main.container');
// const mainElUsingClass = document.querySelector('.container');
console.log(mainElUsingTag);
// console.log(mainElUsingClass);
const mainContainerUsingId = document.getElementById('myContainer')
mainContainerUsingId.innerText = 'Updated Body Container';


// select all the list items and add City in front of them
// select all the li elements
// to loop through all the items
// add the city in front of its content

const liElUsingTagName  = document.getElementsByTagName('li');
console.log(liElUsingTagName);


const liUsingQuerySel = document.querySelectorAll('li');
console.log(liUsingQuerySel[0]);

// node list ---> you can execute forEach method on this
liUsingQuerySel.forEach((el) => {
    // console.log('text', el.innerText);
    // console.log('text', el.textContent);
    el.textContent = `city ---> ${el.textContent}`
    el.style.color = 'blue';
    el.style.backgroundColor = '#ddd'
})

const divOne = document.getElementById('one');

// divOne.className = 'green'
// divOne.className = 'bgDark'

console.log(divOne.classList);
divOne.classList.add('green'); 
divOne.classList.add('bgDark'); 
console.log(divOne.classList);

divOne.title = 'first element';



// liElUsingTagName.forEach(element => {
    
// });

// creating a p element
const comElOne = document.createElement('p');
comElOne.textContent = 'comment one'
console.log(comElOne);

const comElTwo = document.createElement('p');
comElTwo.textContent = 'comment two'
console.log(comElOne);

// select the element where we want to add the created ele
const commentSection = document.getElementById('comments');

// add/append the element
commentSection.appendChild(comElOne)
commentSection.appendChild(comElTwo)

comElOne.style.color = 'red';
comElTwo.style.color = 'blue';

// commentSection.append('some string')


// create a table with 3 rows and 3 columns

// create table tag
const tableEl = document.createElement('table');
// create thead tag
const tableHeader = document.createElement('thead');
// append it inside table
tableEl.appendChild(tableHeader);
console.log(tableEl);
// create tr tag
const tableRow = document.createElement('tr');
// append it inside thead
tableHeader.appendChild(tableRow)
// create th tag 


function createThAndAddContent(content){
    const thEl = document.createElement('th');
    thEl.textContent = content
    return thEl
}

// const th1 = createThAndAddContent('product');
// const th2 = createThAndAddContent('brand');
// const th3 = createThAndAddContent('price');

// // appned th inside tr
// tableRow.appendChild(th1);
// tableRow.appendChild(th2);
// tableRow.appendChild(th3);

const tableHeaderList = ['product', 'brand', 'price', 'color'];

tableHeaderList.forEach((el) => {
    const thEl = createThAndAddContent(el);
    tableRow.appendChild(thEl)
})


// create similarly for tr and td and add rows


const tableSection = document.getElementById('table');
tableSection.appendChild(tableEl)
*/


// dom navigation
const postsMainTag = document.getElementById('posts');
console.log(postsMainTag);
console.log(postsMainTag.childNodes[3].childNodes);
console.log(postsMainTag.firstChild.nextSibling);
console.log(postsMainTag.parentElement);
console.log(postsMainTag.lastChild);
console.log(postsMainTag.lastElementChild);
console.log(postsMainTag.firstElementChild);



const textNode = document.createTextNode('my post')

// let str = 'bangalore'
// let updatedStr = 'city' + str
// 'city --> bangalore'

let obj = {
    name: 'Abhinav',
    address: {
        city: 'delhi'
    }
}