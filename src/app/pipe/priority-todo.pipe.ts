import { Pipe, Injectable, PipeTransform } from '@angular/core';
import { TodoModel } from '../shared/todo-model';
import { isNgTemplate } from '@angular/compiler';

@Pipe({
  name: 'priorityTodo',
 // pure: false
})
export class PriorityTodoPipe implements PipeTransform{
 
  transform(todos: TodoModel[]) {
    console.log(todos);
    
    
    console.log('priority todo pipe');
    return todos.filter(todo => !todo.IsDone).sort((a, b)=>(b.IsImportant && !a.IsImportant) ? 1: -1);
  }


}
