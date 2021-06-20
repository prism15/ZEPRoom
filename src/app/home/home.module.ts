import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {SidenavComponent} from './sidenav/sidenav.component';
import {NotificationComponent} from './notification/notification.component';
import { AddroomComponent } from './addroom/addroom.component';
import { HistoryComponent } from './history/history.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CurrentbookingsComponent } from './currentbookings/currentbookings.component';
import { FormsModule } from '@angular/forms';
import { SearchfilterPipe } from './searchfilter.pipe';


@NgModule({
  declarations: [AddroomComponent, HistoryComponent, WelcomeComponent,NotificationComponent, CurrentbookingsComponent, SearchfilterPipe],
  imports: [
  CommonModule,
    HomeRoutingModule,FormsModule
  ]
})
export class HomeModule { }
