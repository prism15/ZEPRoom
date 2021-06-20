import { Component, OnInit } from '@angular/core';
import {  ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from '../welcome/welcome.component';
import { LoginService } from './../../login.service';




@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  screenWidth : number;
 
  wlcScreen : boolean = true;
  constructor(public  loginservice : LoginService) {
    
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
      this.screenWidth = window.innerWidth;
    }

  }

  ngOnInit(): void {
  }
  

  welcome(){
    this.wlcScreen = false;
    console.log(this.wlcScreen);
  }

  
  

}
