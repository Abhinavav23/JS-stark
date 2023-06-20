// select the elements
const addTaskButton = document.querySelector('.todo-button');
const inputEl = document.querySelector('.todo-input');
const listEl = document.querySelector('.todo-list');


const createElAndAddContentAndClass = (elName, className, content) => {
    // create El, add class, add content
    const newEl = document.createElement(elName);
    if(className !== ''){
        newEl.classList.add(className)
    }
    if(content !==''){
        newEl.textContent = content
    }
    return newEl
}

// add some functionality on add button of form
addTaskButton.addEventListener('click', (event) => {
    // to prevent default behaviour of form
    event.preventDefault();
    // console.log(event);

    // read value added in the input field
    console.log(inputEl.value);
    // create a li element


    /*
    const liEl = document.createElement('li');
    liEl.classList.add('todo-item');

    // create p el
    const pEl = document.createElement('p');
    pEl.textContent = inputEl.value
    console.log(pEl);

    // create delete button el
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('trash-btn');
    deleteButton.textContent = 'Delete'

    // create complete  button el
    const completeButton = document.createElement('button');
    completeButton.classList.add('complete-btn');
    completeButton.textContent = 'Complete'
    */

    const liEl = createElAndAddContentAndClass('li', 'todo-item', '');
    const pEl = createElAndAddContentAndClass('p', '', inputEl.value);
    const completeButton = createElAndAddContentAndClass('button', 'complete-btn', 'Complete');
    completeButton.addEventListener('click', (event) => {
        // console.log(event.target.parentElement);
        // console.log('next', event.target.nextSibling);
        console.log('previous', event.target.previousSibling);
        const PEl = event.target.previousSibling
        // 1st approach
        // PEl.classList.toggle('lineThrough');


        if(pEl.classList.contains('lineThrough')){
            pEl.classList.remove('lineThrough')
        }else{
            pEl.classList.add('lineThrough')
        }
        
    })

    const deleteButton = createElAndAddContentAndClass('button', 'trash-btn', 'Delete');
    deleteButton.addEventListener('click', (event) => {
        // listEl.removeChild(event.target.parentElement);
        event.target.parentElement.remove();
    })


    // append into Li el
    // takes only nodes
    // liEl.appendChild(pEl);
    // liEl.appendChild(completeButton);
    // liEl.appendChild(deleteButton);

    // can take node as well as texts and any no of arguments
    liEl.append(pEl,completeButton,deleteButton);

    // console.log(liEl);

    // // add li el into the list
    listEl.appendChild(liEl);
})