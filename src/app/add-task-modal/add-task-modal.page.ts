import { Component, OnInit } from '@angular/core';
import {TodosPageModule} from '../todos/todos.module'
import { Platform, ModalController, NavParams } from '@ionic/angular';
import { TodoModel } from '../shared/todo-model';

@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.page.html',
  styleUrls: ['./add-task-modal.page.scss'],
})
export class AddTaskModalPage implements OnInit {
  public model = new TodoModel('',false,false,0);
  public titulo:string = "Agregar nueva tarea";
  public botontexto:string = "ADD"

  constructor(
    public platform:Platform, private modalCtrl:ModalController,
    private params:NavParams){

if(this.params.get('todo')){
  this.model = TodoModel.clone(this.params.get('todo'));
  console.log(this.model);
  
  this.titulo = "Editar tarea";
  this.botontexto = "Guardar cambios"
}    
  }

  ngOnInit() {
  }

  esconder(){
    this.modalCtrl.dismiss();
  }

  isIos(){
    return this.platform.is("ios");
  }

  submit(){
    this.modalCtrl.dismiss(this.model);
    
    
    
  }
}
