
let taskList = [];

const btn = document.querySelector("#button");
btn.addEventListener("click", function(){ // adding click event to the add task button
    const content = document.getElementById("task"); // getting input field ID

    if (content.value == ""){
        alert("Enter a task");
    } else taskList.push(content.value);
    content.value = "";
    console.log(taskList);
    displayList();
});

function displayList(){
    document.querySelector("#new_list").innerHTML = "";
    taskList.forEach((task, index) => {
        const newItem = document.createElement("li"); // create new list element
        newItem.setAttribute("class", "flex gap-5")
        const newContent = document.createTextNode(task); // create new text node with the input field text content (value)
        newItem.appendChild(newContent); // append the text node to the new list element
        const newSection = document.createElement("div") // create new div element to contain the two buttons
        const removeButton = document.createElement("button"); // create remove button
        const editButton = document.createElement("button"); // create edit button
        removeButton.textContent = "Remove task" // text content for remove button
        removeButton.setAttribute("class", "p-1 ml-5 text-sm bg-slate-200 rounded-lg hover:bg-cyan-200") // setting button styling with tailwind utility classes
        removeButton.onclick = () => {removeTask(index)}; // calls function to remove the task based on its index in the current array
        editButton.textContent = "Edit task" // text content for edit button
        editButton.setAttribute("class", "p-1 ml-2 text-sm bg-slate-200 rounded-lg hover:bg-cyan-200") // setting button styling
        editButton.onclick = () => {editTask(index)}; // calls the edit function
        newSection.appendChild(removeButton); // append the remove button to newSection div
        newSection.appendChild(editButton); //append the edit button to newSection div
        newItem.appendChild(newSection);
        const currentList = document.querySelector("#new_list");
        currentList.insertAdjacentElement("beforeend", newItem); //add the new list element after the last child of the list
        //console.log(newItem)
    });
};

function removeTask(index) {
    taskList.splice(index, 1); // Remove the task from the tasks array
    displayList(); // Update the task list display
};
   
function editTask(index) {
    let task = prompt("Enter edited task"); // prompt for new text
    taskList[index] = task; // replace the item at this index with the new text
    displayList(); // display updated task list
};