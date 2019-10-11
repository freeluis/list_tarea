import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {AddTaskModalPage} from '../add-task-modal/add-task-modal.page'
import { IonicModule, ModalController, NavParams } from '@ionic/angular';

import { TodosPage } from './todos.page';
import { AddTaskModalPageModule } from '../add-task-modal/add-task-modal.module';
import { PriorityTodoPipe } from '../pipe/priority-todo.pipe';
import { DoneTodoPipePipe } from '../pipe/done-todo-pipe.pipe';


const routes: Routes = [
  {
    path: '',
    component: TodosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    
    
  ],
  declarations: [TodosPage,AddTaskModalPage,PriorityTodoPipe, DoneTodoPipePipe],
  entryComponents:[AddTaskModalPage] 
})
export class TodosPageModule {}
