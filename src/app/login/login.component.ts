import { R3TargetBinder } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from './../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private  router : Router , private login : LoginService){ }

  ngOnInit():void{
  }

  loginUser(event){
    event.preventDefault();
    const target = event.target;
    const email = target.querySelector('#email').value;
    const password = target.querySelector('#password').value;

    this.login.LoginUser(email,password).subscribe((res:any)=>{
      if(res.token){
        console.log("In If")
        Swal.fire({
          text : "Successfully LoggedIn",
          icon : 'success',
          showConfirmButton : false,
          timer : 1300
        })
        localStorage.setItem('token',res.token);
        this.router.navigate(['Home/Notification']); 
      }else{
        Swal.fire({
          text : "Failed to LogIn Please check credentials",
          title : 'Error',
          icon : 'error',
          showConfirmButton : false,
          timer : 1100
        })
      }  
    })
  }
}
