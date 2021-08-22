import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor() {
    this.todos = JSON.parse(sessionStorage.getItem("todos") || '[]');
  }

  ngOnInit(): void {
  }

  dltTodo(todo: Todo) {
    let ind__ = this.todos.indexOf(todo);
    this.todos.splice(ind__, 1);
    sessionStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    sessionStorage.setItem("todos", JSON.stringify(this.todos));
  }

  doneTodo(todo: Todo) {
    let ind__ = this.todos.indexOf(todo);
    this.todos[ind__].active = !this.todos[ind__].active;
    sessionStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
