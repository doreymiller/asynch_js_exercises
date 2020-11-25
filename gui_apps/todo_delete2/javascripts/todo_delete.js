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

      li.addEventListener('contextmenu', e => {
        e.preventDefault();
        let id = e.target.getAttribute('data-id');
        let coordX = e.clientX;
        let coordY = e.clientY;
        this.currentTodo = e.target.getAttribute('data-id');
        this.showContextMenu(id, {coordX, coordY});
      });

      this.ul.appendChild(li);
    });
  },

  showContextMenu(id, coords) {
    console.log("showContextMenu");
    console.log(coords);
    this.contextMenu.innerHTML = "" + this.contextMenuTmp({id});
    this.contextMenu.style.top = `${coords.coordY}px`;
    this.contextMenu.style.left = `${coords.coordX}px`;
    this.contextMenu.setAttribute('data-id', id);
    
    let deleteEl = this.contextMenu.querySelector('.remove');
    deleteEl.addEventListener('click', e => {
      e.preventDefault();
      hideElement(this.contextMenu);
      this.showConfirmation();
    });

    showElement(this.contextMenu);
  },

  showConfirmation() {
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
    let contextMenuEl = document.querySelector("#context-menu-template");
    this.contextMenu = document.querySelector(".context_menu");
    
    this.contextMenuTmp = Handlebars.compile(contextMenuEl.innerHTML);
    this.createList();
    this.bind();
  }
};

document.addEventListener("DOMContentLoaded", e => {
  todoApp.init();
});