import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule ,  HTTP_INTERCEPTORS } from '@angular/common/http'; //Interceptor allows us to send data back to the server from the frontend
import { JwtModule } from '@auth0/angular-jwt';
import { NgModule } from '@angular/core';
import { Routes , RouterModule} from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AuthGuard} from './auth.guard';
import {TokenInterceptorService} from './token-interceptor.service'
import { NgxNumberSpinnerModule } from 'ngx-number-spinner';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './home/sidenav/sidenav.component';


//import { NotificationComponent } from './home/notification/notification.component';


const appRoutes : Routes = [
  { path: '', redirectTo : 'login', pathMatch : 'full' },
  { path : 'login', component : LoginComponent },
  { path : 'signup',component : SignupComponent },
  { 
    path: 'Home', 
    component: HomeComponent,
    loadChildren : ()=>import(`./home/home.module`).then(m=>m.HomeModule),
    canActivate : [AuthGuard],//if canActivate returns true this means that route can be accessed else it cannot be accessed.
  }
  
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    NavbarComponent,
    SidenavComponent,
  ],
  imports: [
    ReactiveFormsModule,//you added this module to convert to ReactiveForms
    FormsModule,
    NgxNumberSpinnerModule,
    BrowserModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [AuthGuard , 
  {
    provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
