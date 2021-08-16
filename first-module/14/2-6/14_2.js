const tasks = [
    {
        id: 1,
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: 2,
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: 3,
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
 ]

function createElement(element, className){
    if(!element){
        console.log('Need element');
    }
    else{
        let newEl = document.createElement(element);
        newEl.classList.add(className);
        return newEl;
    }
}

 const tasksList = document.querySelector('.tasks-list');
 const task1 = document.createElement('div');
 const task2 = document.createElement('div');
 const task3 = document.createElement('div');
 tasksList.append(task1);
 tasksList.append(task2);
 tasksList.append(task3);

let allTasks = tasksList.querySelectorAll('div');
function updateTaskList(array){
    for(let i = 0; i<tasks.length; i++){
        array[i].classList.add('task-item');
        array[i].setAttribute('completed', `${tasks[i].completed}`);
        array[i].dataset.taskId = tasks[i].id;
     }
}

updateTaskList(allTasks);
 const task1id=document.querySelector('[data-task-id="1"]');
 const mainContainerDiv1 = createElement('div', 'task-item__main-container');
 const task2id=document.querySelector('[data-task-id="2"]');
 const mainContainerDiv2 = createElement('div', 'task-item__main-container');
 const task3id=document.querySelector('[data-task-id="3"]');
 const mainContainerDiv3 = createElement('div', 'task-item__main-container');
 task1id.append(mainContainerDiv1);
 task2id.append(mainContainerDiv2);
 task3id.append(mainContainerDiv3);

 const mainContentDiv1 = createElement('div', 'task-item__main-content');
 const mainContentDiv2 = createElement('div', 'task-item__main-content');
 const mainContentDiv3 = createElement('div', 'task-item__main-content');
 mainContainerDiv1.append(mainContentDiv1);
 mainContainerDiv2.append(mainContentDiv2);
 mainContainerDiv3.append(mainContentDiv3);
 let mainContents = document.querySelectorAll('.task-item__main-content');

 const form1 = createElement('form', 'checkbox-form');
 const form2 = createElement('form', 'checkbox-form');
 const form3 = createElement('form', 'checkbox-form');
 mainContentDiv1.append(form1);
 mainContentDiv2.append(form2);
 mainContentDiv3.append(form3);
 let forms = document.querySelectorAll('form');

 const input1 = createElement('input', 'checkbox-form__checkbox');
 const input2 = createElement('input', 'checkbox-form__checkbox');
 const input3 = createElement('input', 'checkbox-form__checkbox');
 form1.append(input1);
 form2.append(input2);
 form3.append(input3);
 let inputs = document.querySelectorAll('.task-item__main-content input');
 for(let i = 0; i<inputs.length; i++){
    inputs[i].setAttribute('type', 'checkbox');
    inputs[i].dataset.id = `task-${i+1}`;
 }

 let label1 = document.createElement('label');
 let label2 = document.createElement('label');
 let label3 = document.createElement('label');
 form1.append(label1);
 form2.append(label2);
 form3.append(label3);
 let labels=document.querySelectorAll('label');

 labels.forEach((label)=>{
     label.htmlFor = 'task';
 })
 
 const span1 = createElement('span', 'task-item__text');
 const span2 = createElement('span', 'task-item__text');
 const span3 = createElement('span', 'task-item__text');
 mainContentDiv1.append(span1);
 mainContentDiv2.append(span2);
 mainContentDiv3.append(span3);
 
 let spans = document.querySelectorAll('span');
 for(let i = 0; i<spans.length; i++){
    spans[i].innerText = tasks[i].text; 
 }

const button1 = createElement('button', 'task-item__delete-button');
const button2 = createElement('button', 'task-item__delete-button');
const button3 = createElement('button', 'task-item__delete-button');
mainContainerDiv1.append(button1);
mainContainerDiv2.append(button2);
mainContainerDiv3.append(button3);
let buttons = document.querySelectorAll('button');
for(let i = 1; i<buttons.length; i++){
    buttons[i].classList.add('default-button');
    buttons[i].classList.add('delete-button');
    buttons[i].dataset.deleteTaskId=`${i}`;
    buttons[i].innerText = 'Удалить';
 }

//  Задание 3


function getAllInputs(selector){
    let allInputs = document.querySelectorAll(selector);
        let allTexts = [];
        allInputs.forEach((input)=>{
           allTexts.push(input.innerText);
        })
        return allTexts;
    }


const createTaskForm = document.querySelector('.create-task-block');
createTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const { target } = event;
    const inputValue = target.taskName.value;
    let result = compareInput(inputValue, '.task-item__text');
    if(inputValue && result === false) {
        let newTask = createElement('div', 'task-item');
        tasksList.append(newTask);
        newTask.setAttribute('completed', 'false');
        let y = document.querySelectorAll('.task-item').length;
        newTask.dataset.taskId = y;
        let newContainer = createElement('div', 'task-item__main-container');
        newTask.append(newContainer);
        let newContent = createElement('div', 'task-item__main-content');
        newContainer.append(newContent);
        let newForm = createElement('form', 'checkbox-form');
        newContent.append(newForm);
        let newInput = createElement('input', 'checkbox-form__checkbox');
        newForm.append(newInput);
        newInput.setAttribute('type', 'checkbox');
        newInput.dataset.id = `task-${y}`;
        let newLabel = document.createElement('label');
        newForm.append(newLabel);
        newLabel.htmlFor = 'task';
        let newSpan = createElement('span', 'task-item__text');
        newContent.append(newSpan);
        newSpan.innerText = inputValue;
        let newBtn = createElement('button', 'task-item__delete-button');
        newContainer.append(newBtn);
        newBtn.classList.add('default-button');
        newBtn.classList.add('delete-button');
        newBtn.dataset.deleteTaskId=`${y}`;
        newBtn.innerText = 'Удалить';
    }
})

// Задание 4

function getAllInputs(selector){
    let allInputs = document.querySelectorAll(selector);
        let allTexts = [];
        allInputs.forEach((input)=>{
           allTexts.push(input.innerText);
        })
        return allTexts;
    }


    function compareInput(value, selector){
      let existingInputs = getAllInputs(selector);
      return existingInputs.some((input) => {
          return input === value;
      })
    }

    const mainInput = document.querySelector('.default-text-input');

    mainInput.addEventListener('change', (event) => {
        const { target } = event;
        const changeValue = target.value;
        let errorSpan = document.querySelector('.error-message-block');
        let result = compareInput(changeValue, '.task-item__text');
        if(!changeValue){
            if(errorSpan){
                errorSpan.remove();
              }
            let errorSpan1 = createElement('span', 'error-message-block');
            errorSpan1.innerText = 'Название задачи не должно быть пустым.';
            createTaskForm.append(errorSpan1);
            return;
        }
        else if(result === true){
              if(errorSpan){
                errorSpan.remove();
              }
               let errorSpan1 = createElement('span', 'error-message-block');
                errorSpan1.innerText = 'Задача с таким названием уже существует.';
                createTaskForm.append(errorSpan1);
                return;
        }
        else if(changeValue && errorSpan) {
            errorSpan.remove();
            return;
        }
    })


// Задание 5

const deleteBtns = document.querySelectorAll('.delete-button');
const taskList = document.querySelector('.tasks-list');
const body = document.querySelector('body');

let newModalOverlay = createElement('div', 'modal-overlay');
newModalOverlay.classList.add('modal-overlay_hidden');
body.append(newModalOverlay);
let newDeleteModal = createElement('div', 'delete-modal');
newModalOverlay.append(newDeleteModal);
let newH3 = createElement('h3', 'delete-modal__question');
newDeleteModal.append(newH3);
newH3.innerText = 'Вы действительно хотите удалить эту задачу?';
let newDeleteModalBtns = createElement('div', 'delete-modal__buttons');
newDeleteModal.append(newDeleteModalBtns);
let modalCancelBtn = createElement('button', 'delete-modal__button');
modalCancelBtn.classList.add('delete-modal__cancel-button');
modalCancelBtn.innerText = 'Отмена';
newDeleteModalBtns.append(modalCancelBtn);
let modalConfirmBtn = createElement('button', 'delete-modal__button');
modalConfirmBtn.classList.add('delete-modal__confirm-button');
modalConfirmBtn.innerText = 'Удалить';
newDeleteModalBtns.append(modalConfirmBtn);
let taskToDelete;

function removeTask(taskToDelete){
    let elementToDelete = document.querySelector(`[data-task-id="${taskToDelete}"]`);
    elementToDelete.remove();
}

taskList.addEventListener('click', (event) => {
    event.preventDefault();
    const { target } = event;
    taskToDelete = target.dataset.deleteTaskId;
    newModalOverlay.classList.remove('modal-overlay_hidden');
})
newDeleteModalBtns.addEventListener('click', (event) => {
    const { target } = event;
    const confirmBtn = target.closest('.delete-modal__confirm-button');
    const cancelBtn = target.closest('.delete-modal__cancel-button');
    if(cancelBtn){
        newModalOverlay.classList.add('modal-overlay_hidden');
    }
    else if(confirmBtn){
        newModalOverlay.classList.add('modal-overlay_hidden');
        removeTask(taskToDelete);
    }
})

// Задание 6

let taskItems = document.querySelectorAll('.task-item');
let allBtns = document.querySelectorAll('button');

document.addEventListener('keydown', (event) => {
    event.preventDefault();
    const { key } = event;
    const lightThemeOn = body.style.background === 'initial'?true:false;
    if(key === 'Tab'){
        if(lightThemeOn){
            body.style.background = '#24292E';
            for(let i = 0; i<allBtns.length; i++){
                allBtns[i].style.border = '1px solid #ffffff';
            }
            for(let i = 0; i<taskItems.length; i++){
                taskItems[i].style.color = '#ffffff';
            }
        }
        else if (!lightThemeOn){
            body.style.background = 'initial';
            for(let i = 0; i<taskItems.length; i++){
                taskItems[i].style.color = 'initial';
            }
            for(let i = 0; i<allBtns.length; i++){
                allBtns[i].style.border = 'none';
            }
        }
    }
})




