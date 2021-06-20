import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotificationRoutingModule } from './notification-routing.module';
import { BookroomComponent } from './bookroom/bookroom.component';


@NgModule({
  declarations: [BookroomComponent],
  imports: [
    FormsModule,
    CommonModule,
    NotificationRoutingModule
  ]
})
export class NotificationModule { 
  
}
