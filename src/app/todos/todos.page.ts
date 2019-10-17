import { Component, OnInit, AfterViewInit } from '@angular/core';

import { TodoModel } from '../shared/todo-model';
import { isNgTemplate } from '@angular/compiler';
import { IonItem, ModalController, NavParams } from '@ionic/angular';
import { AddTaskModalPageModule } from '../add-task-modal/add-task-modal.module';
import { present } from '@ionic/core/dist/types/utils/overlays';
import { AddTaskModalPage } from '../add-task-modal/add-task-modal.page';
import { MiservicioService } from '../shared/miservicio.service';
import { ListModel } from '../shared/list-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.page.html',
  styleUrls: ['./todos.page.scss'],
})
export class TodosPage implements OnInit, AfterViewInit {


  modalController: any;
  private list: ListModel;

  constructor(
    public modalCtrl: ModalController,
    public miServicio: MiservicioService,
    private activatedRouter: ActivatedRoute
  ) {
    this.activatedRouter.params.subscribe((params) => {
      console.log(params);
      this.list = JSON.parse(params.list);
      console.log(this.list);
      this.miServicio.loadFromList(this.list.id);
    });
  }


  ngOnInit() {


  }

  ngAfterViewInit(){

  }

  setTodoStyles(item: TodoModel) {
    let styles = {
      'text-decoration': item.IsDone ? 'line-through' : 'none',
      'font-weight': item.IsImportant ? '688' : 'normal'
    };

    return styles;
  }
  toogleTodo(todo: TodoModel) {

    this.miServicio.toogleTodo(todo)
  }
  removeTodo(todo: TodoModel) {
    this.miServicio.removeTodo(todo);
  }

  async showAddTodo() {

    const modal = await this.modalCtrl.create({
      component: AddTaskModalPage
    });
    modal.onDidDismiss()
      .then((data: any) => {
        if (data.data) {
          this.miServicio.addTodo(data.data);
          this.miServicio.saveLocally(this.list.id);
        }
      });
    return await modal.present();
  }

  async showEditTodo(todo: TodoModel) {
    const modal = await this.modalCtrl.create(
      { component: AddTaskModalPage, componentProps: { todo } });

    modal.onDidDismiss()
      .then((data: any) => {
        if (data.data) {
          //debugger;
          let modificado: TodoModel = data.data;
          this.miServicio.editTodo(todo, modificado);

        }
      });

    return await modal.present();








  }


}