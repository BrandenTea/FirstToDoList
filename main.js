let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let inputFieldMulti = inputField.length;
const keyBoard = document.querySelector('.keyboard')













/* Enter button to submit list */
var input = document.getElementById("inputField");
input.addEventListener("keyup", function(eventEnterKey) {
    if (eventEnterKey.keyCode === 13) {
        event.preventDefault();
        document.getElementById("addToDo").click();
    }
});


addToDoButton.addEventListener('click', function(){
	var paragraph = document.createElement('p');
	paragraph.classList.add('paragraph-styling');
	paragraph.innerText = inputField.value;
	toDoContainer.appendChild(paragraph);
	inputField.value = ""; 


	paragraph.addEventListener('click', function(){
		paragraph.style.textDecoration = "line-through";
	})
	paragraph.addEventListener('dblclick', function(){
		toDoContainer.removeChild(paragraph)
	})
	
	


	})


let addToDoButton2 = document.getElementById('addToDo2');
let toDoContainer2 = document.getElementById('toDoContainer2');
let inputField2 = document.getElementById('inputField2');





var input = document.getElementById("inputField2");
input.addEventListener("keyup", function(eventEnterKey) {
    if (eventEnterKey.keyCode === 13) {
        event.preventDefault();
        document.getElementById("addToDo2").click();
    }
});


addToDoButton2.addEventListener('click', function(){
	var paragraph = document.createElement('p');
	paragraph.classList.add('paragraph-styling');
	paragraph.innerText = inputField2.value;
	toDoContainer2.appendChild(paragraph);
	inputField2.value = ""; 


	paragraph.addEventListener('click', function(){
		paragraph.style.textDecoration = "line-through";
	})
	paragraph.addEventListener('dblclick', function(){
		toDoContainer2.removeChild(paragraph)
	})
	
	


	})