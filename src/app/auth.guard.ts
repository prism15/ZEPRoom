import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree , Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private login : LoginService , private router : Router){}

  canActivate():boolean{
    if(this.login.LoggedIn()){
      return true;
    }
    else{
      this.router.navigate(['/login'])
      return false
    }
  }
  
}
