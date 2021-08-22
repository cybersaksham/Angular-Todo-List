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
    this.todos = [];
  }

  ngOnInit(): void {
  }

  dltTodo(todo: Todo) {
    let ind__ = this.todos.indexOf(todo);
    this.todos.splice(ind__, 1);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
}
