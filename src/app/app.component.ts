import { Component } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {
  title: string = 'Todo Worx!';
  newTodo: Todo = new Todo();
  showError: boolean = false;
  errorMsg: string;

  constructor(private todoDataService: TodoDataService) {
    this.todoDataService.addTodo(new Todo({title: 'Example 1',complete: false}));
    this.todoDataService.addTodo(new Todo({title: 'Example 2',complete: true}));
    this.todoDataService.addTodo(new Todo({title: 'Example 3',complete: false}));
  }

  addTodo() {
    if(this.newTodo.title !== '') {
      this.todoDataService.addTodo(this.newTodo);
      this.newTodo = new Todo();
      this.clearError();
    } else {
      this.showError = true;
      this.errorMsg = 'This field shouldn\'t be empty';
    }
  };

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  };

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  };

  get todos() {
    return this.todoDataService.getAllTodos();
  };

  clearError() {
    this.showError = false;
    this.errorMsg = '';
  }

}
