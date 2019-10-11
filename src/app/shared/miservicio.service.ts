import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoModel } from './todo-model';
import { longStackSupport } from 'q';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MiservicioService {
  private todos: TodoModel[] = [];

  private timer: any;
  constructor(public http: HttpClient, private platform: Platform) {

  }

  public loadFromList(id: number) {
    if (id < 3) {
      this.todos = [

        new TodoModel("a", false, false, 1),
        new TodoModel("b", false, false, 2),
        new TodoModel("c", false, false, 3)
      ]
    }
    else {
      this.todos = [];
    }
  }

  toogleTodo(todo: TodoModel) {
    console.log(todo);
    if (this.timer)
      return;

    this.timer = setTimeout(() => {
      let IsDone = !todo.IsDone;

      /*let posicion2:number=0;
      debugger;
      for (let i = 0; i < this.todos.length; i++) {
        console.log(i);
        
        let cadaElementoDeLaLista = this.todos[i];
        if(cadaElementoDeLaLista.id == todo.id){
          posicion2 = i;
        }
      }
      */
      let posicion = this.todos.findIndex((cadaElementoDeLaLista) => {

        return cadaElementoDeLaLista.id == todo.id
      });
      console.log(posicion);

      let updateTodo = new TodoModel(todo.description, todo.IsImportant, IsDone, todo.id);

      this.todos = [
        ...this.todos.slice(0, posicion),
        updateTodo,
        ...this.todos.slice(posicion + 1)
      ];
      this.timer = null;
    }, this.platform.is('ios') ? 0 : 300);



  }

  removeTodo(todo: TodoModel) {
    const index = this.todos.indexOf(todo);
    this.todos = [
      ...this.todos.slice(0, index),
      ...this.todos.slice(index + 1)];
  }
  addTodo(todo: TodoModel) {


    todo.id = this.todos.length + 1;
    this.todos = [...this.todos, todo];


  }
  editTodo(original: TodoModel, todoModificado: TodoModel) {
    //debugger;


    let posicion = this.todos.findIndex((cadaElementoDeLaLista) => {

      return cadaElementoDeLaLista.id == original.id;
    });
    this.todos = [
      ...this.todos.slice(0, posicion),
      todoModificado,
      ...this.todos.slice(posicion + 1)];

  }
}
