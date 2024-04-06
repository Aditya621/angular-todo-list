import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoList } from '../todo-app/todo-app.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  @Input() listData: TodoList[] = [];
  @Output() editValue = new EventEmitter<TodoList>();
  @Output() deleteValue = new EventEmitter<number>();
}
