import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddTaskModalPage } from './add-task-modal.page';
import { TodosPageModule } from '../todos/todos.module';
import { TodosPage } from '../todos/todos.page';
import { PriorityTodoPipe } from '../pipe/priority-todo.pipe';

const routes: Routes = [
  {
    path: '',
    component: AddTaskModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TodosPageModule,
    
  ],
  declarations: [AddTaskModalPage, TodosPage]
})
export class AddTaskModalPageModule {}
