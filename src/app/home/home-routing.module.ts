import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { pathToFileURL } from 'url';
import { HomeComponent } from './home.component';
import { NotificationComponent } from './notification/notification.component';
import { AddroomComponent } from "./addroom/addroom.component";
import { HistoryComponent } from "./history/history.component";
import { WelcomeComponent } from './welcome/welcome.component';
import { CurrentbookingsComponent } from './currentbookings/currentbookings.component';




const routes: Routes = [
  //{
    //path : '',
    //component : NotificationComponent
  //},
  {
    path : 'Notification',
    //component : NotificationComponent,
    loadChildren : ()=>import(`./notification/notification.module`).then(m=>m.NotificationModule)
    
  },
  {
    path : 'addRoom',
    component : AddroomComponent
  },
  {
    path : 'History',
    component : HistoryComponent
  },
  {
    path : 'Currentbookings',
    component : CurrentbookingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  

exports: [RouterModule]
})
export class HomeRoutingModule { }
