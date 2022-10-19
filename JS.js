let addButton = document.getElementById("add-button")
addButton.addEventListener("click", addToDoItem)

let inputBox = document.getElementById("todo-entry-box")

function addToDoItem(){
    let itemText = inputBox.value; inputBox.value=""
    newToDoItem(itemText)
}

let toDoList = document.getElementById("todo-list")

function newToDoItem(text){
    let toDoItem = document.createElement("li")
    toDoItem.innerText = text

    toDoList.append(toDoItem)
    toDoItem.addEventListener("click", toggleItemState)
}

function toggleItemState(){
    if(this.classList.contains("completed")){
        this.classList.remove("completed")
    } else {
        this.classList.add("completed")
    }
}

let clearButton = document.getElementById("clear-button")
clearButton.addEventListener("click", clearCompleted)

function clearCompleted(){
    let completedItems = toDoList.getElementsByClassName("completed")

    while(completedItems.length > 0){
        completedItems[0].remove();
    }
}

let emptyButton = document.getElementById("empty-button")
emptyButton.addEventListener("click", emptyList)

function emptyList(){
    toDoList.innerHTML = ""
}










