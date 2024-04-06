import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { TodoAppComponent } from './app/todo-app/todo-app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Todo List Made by Aditya :)</h1>
    <app-todo-app></app-todo-app>
  `,
  imports: [CommonModule, TodoAppComponent],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
