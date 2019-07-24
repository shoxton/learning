var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('todoList')) || [];

function renderTodos() {

    listElement.innerHTML = '';

    for (todo of todos) {
        var listItemElement = document.createElement('li');
        var listItemTextElement = document.createTextNode(todo);
        var linkElement = document.createElement('a');
        var linkTextElement = document.createTextNode('Delete');

        linkElement.setAttribute('href','#');
        linkElement.setAttribute('onclick','removeTodo('+ todos.indexOf(todo) +')')
        linkElement.appendChild(linkTextElement);

        listItemElement.appendChild(listItemTextElement);
        listItemElement.appendChild(linkElement);
        listElement.appendChild(listItemElement);

    }
}

renderTodos();

function addTodo() {

    var text = inputElement.value;
    
    if (text) {
        todos.push(text);
        inputElement.value = '';
        inputElement.focus();
    
        saveToStorage();
        renderTodos();
    }

}

btnElement.onclick = addTodo;

function removeTodo(i) {

    todos.splice(i,1);

    saveToStorage();
    renderTodos();

}

function saveToStorage() {
    localStorage.setItem('todoList', JSON.stringify(todos));
}