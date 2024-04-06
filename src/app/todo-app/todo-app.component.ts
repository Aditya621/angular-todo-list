import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoListComponent } from '../todo-list/todo-list.component';

export interface TodoList {
  value: string;
  id: number;
}

@Component({
  selector: 'app-todo-app',
  standalone: true,
  imports: [FormsModule, TodoListComponent],
  templateUrl: './todo-app.component.html',
  styleUrl: './todo-app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoAppComponent {
  public inputValue = '';
  public todoList: TodoList[] = [];
  public editInfo: TodoList | null | undefined;

  public onSubmit() {
    if (this.editInfo) {
      this.updateItem(this.inputValue);
    } else {
      this.addList(this.inputValue);
    }
    this.inputValue = '';
  }

  public updateItem(editValue: string) {
    const newList = [...this.todoList];

    const item = newList.find((idx) => idx.id === this.editInfo?.id); // find the item{id,value}

    if (item) {
      // update the item value
      item.value = editValue;
    }

    this.todoList = newList; // store the updated list in todolist;
    this.editInfo = null;
  }

  public addList(value: string) {
    this.todoList.push({ value, id: new Date().getTime() });
  }

  public edit(newValue: TodoList) {
    const id = newValue.id;
    const value = newValue.value;
    this.inputValue = newValue.value;

    this.editInfo = { id, value };
  }

  public delete(index: number) {
    this.todoList = this.todoList.filter(
      (value) => value.id !== this.todoList[index].id
    );
  }
}
