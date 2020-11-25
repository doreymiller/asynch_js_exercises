let todo_items = [
  { id: 1, title: 'Homework' },
  { id: 2, title: 'Shopping' },
  { id: 3, title: 'Calling Mom' },
  { id: 4, title: 'Coffee with John '}
];

function showElement(element) {
  element.classList.remove("hide");
  element.classList.add("show");
}

function hideElement(element) {
  element.classList.remove("show");
  element.classList.add("hide");
}

const todoApp = {
  todos: todo_items,

  createList() {
    this.todos.forEach(todo => {
      let li = document.createElement("li");
      li.setAttribute("data-id", todo.id);
      li.textContent = todo.title;

      let deleteButton = document.createElement("span");
      deleteButton.textContent = "X";
      deleteButton.classList.add("delete");
      deleteButton.setAttribute('data-id', todo.id);
      deleteButton.addEventListener("click", e => {
        e.preventDefault();
        this.showConfirmation(e);
      });
      
      li.appendChild(deleteButton);
      this.ul.appendChild(li);

    });
  },

  showConfirmation(e) {
    this.currentTodo = e.target.getAttribute('data-id');
    showElement(this.confirmationBg);
    showElement(this.confirmationDialog);
  },

  hideConfirmation() {
    hideElement(this.confirmationBg);
    hideElement(this.confirmationDialog);
  },

  removeTodo(e) {
    e.preventDefault();
    this.hideConfirmation();
    let targetId = e.target.getAttribute('data-id');
    this.todos = this.todos.filter(todo => todo.id !== targetId);
    document.querySelector(`li[data-id="${this.currentTodo}"]`).remove();
  },

  bind() {
    let yesButton = document.querySelector("#yes-button");
    let noButton = document.querySelector("#no-button");
    yesButton.addEventListener("click", e => this.removeTodo(e));
    noButton.addEventListener("click", e => {
      e.preventDefault();
      this.hideConfirmation();
    });
  },

  init() {
    this.ul = document.querySelector("ul");
    this.confirmationBg = document.querySelector("#modal-bg");
    this.confirmationDialog = document.querySelector("#modal");
    console.log(this.confirmationDialog);
    this.createList();
    this.bind();
  }
};

document.addEventListener("DOMContentLoaded", e => {
  todoApp.init();
});