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
    this.todos = [
      {
        sno: 1,
        title: "First Todo",
        desc: "This is the first todo",
        active: true
      },
      {
        sno: 3,
        title: "Second Todo",
        desc: "This is the second todo",
        active: true
      }
    ]
  }

  ngOnInit(): void {
  }

}
