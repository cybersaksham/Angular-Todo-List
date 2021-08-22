import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Models/todo';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  title!: string
  desc!: string

  constructor() { }

  ngOnInit(): void {
  }

  addTodo() {
    const todo__ = {
      title: this.title,
      desc: this.desc,
      active: true,
    }
    this.todoAdd.emit(todo__);
  }

}
