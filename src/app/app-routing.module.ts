import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./todos/todos.module').then( m => m.TodosPageModule)},
  { path: 'todos', loadChildren: './todos/todos.module#TodosPageModule' },
  { path: 'add-task-modal', loadChildren: './add-task-modal/add-task-modal.module#AddTaskModalPageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
