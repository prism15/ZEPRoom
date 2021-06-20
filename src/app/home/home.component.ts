import { Component, OnInit } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';
import {SidenavComponent} from './sidenav/sidenav.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   _opened:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
   _toggleSidebar(){
    this._opened = !this._opened
  }

}
