const form = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")

let todoEdit = null

form.addEventListener("submit", event => {
	event.preventDefault() //  Prevent the default behavior of the browser for the 'submit' event

	// check if input is empty
	const todoText = todoInput.value.trim()
	if (todoText.length === 0) {
		alert("No task entered!")
		return
	}

	// add new task
	if (todoEdit === null) {
		// new elements in HTML of the task
		const todoItem = document.createElement("li")
		const todoTextSpan = document.createElement("span")
		const editButton = document.createElement("button")
		const deleteButton = document.createElement("button")

		// Add text, buttons and posibility to edit the task
		todoTextSpan.textContent = todoText
		editButton.textContent = "Edit"
		deleteButton.textContent = "Delete"
		todoItem.appendChild(todoTextSpan)
		todoItem.appendChild(editButton)
		todoItem.appendChild(deleteButton)

		// event for edit what happened
		editButton.addEventListener("click", event => {
			todoEdit = todoItem
			todoInput.value = todoTextSpan.textContent
			form.querySelector('button[type="submit"]').textContent = "Save"
		})

		// event for deleting
		deleteButton.addEventListener("click", event => {
			todoList.removeChild(todoItem) //delete the task from the list
		})

		// add new task to the list
		todoList.appendChild(todoItem)
	} else {
		// edit task
		const todoTextSpan = todoEdit.querySelector("span")
		todoTextSpan.textContent = todoText
		form.querySelector('button[type="submit"]').textContent = "Add"
		todoEdit = null
	}

	// clear input
	todoInput.value = ""
})
