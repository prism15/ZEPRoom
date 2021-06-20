import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from '../notification/notification.component';
import { SidenavRoutingModule } from './sidenav-routing.module';
import { HomeComponent } from '../home.component';
import {WelcomeComponent} from '../welcome/welcome.component';


@NgModule({
  declarations: [
    NotificationComponent,
    HomeComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    SidenavRoutingModule
  ]
})
export class SidenavModule { }
