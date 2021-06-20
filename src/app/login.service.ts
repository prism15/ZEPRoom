import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



interface loginResponse{
  
  success : boolean;
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http : HttpClient, private router : Router ) { }

  LoginUser(email , password){
    return this.http.post<loginResponse>("https://roomservers.herokuapp.com/login",{
      email:email,
      password:password
    })
  }

  //checks if the token is present in the browser then only the user will get access to further components
  LoggedIn()
  {
    return !!localStorage.getItem('token') // we want boolean value and this statement will return either true or false
  }

  getToken() {

    return localStorage.getItem('token');
  }

  logoutUser()
  {
    localStorage.removeItem('token')
    this.router.navigate(['login']);
  }


}

