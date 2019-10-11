import { Pipe, PipeTransform } from '@angular/core';
import { TodoModel } from '../shared/todo-model';
import { log } from 'util';

@Pipe({
  name: 'doneTodoPipe',
  // pure: false
})
export class DoneTodoPipePipe implements PipeTransform {

  transform(todos: TodoModel[]) {
    
    console.log('done todo pipe');
    return todos.filter(todo => todo.IsDone);
  }

}
