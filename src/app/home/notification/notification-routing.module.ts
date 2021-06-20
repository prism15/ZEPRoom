import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathToFileURL } from 'url';
import { NotificationComponent } from './notification.component';
import { BookroomComponent } from './bookroom/bookroom.component';

const routes: Routes = [
  {
    path : '',
    component : NotificationComponent
  },
  {
    path : 'bookroom',
    component : BookroomComponent,
    
  }
];

@NgModule({
  
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationRoutingModule { }
