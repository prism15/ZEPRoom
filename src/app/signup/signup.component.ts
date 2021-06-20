import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { RegisterService } from './../register.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private register : RegisterService , private router : Router) { }

  ngOnInit(): void {
  }
  registerUser(event){
    event.preventDefault()
    const target = event.target;
    const firstname = target.querySelector('#firstname').value
    const lastname = target.querySelector('#lastname').value
    const email = target.querySelector('#email').value
    const password = target.querySelector('#password').value

    if(password)
    {
      console.log("please enter password")
    }

    //if(Error.length == 0){
      this.register.getUserDetails(firstname,lastname,email,password).subscribe(data=>{
        console.log(data);
        if(data.success){
          this.router.navigate(['home'])
        }
        else{
          window.alert("Something went wrong");
        }
      })
    //}
    console.log(firstname,lastname,email,password);
  }


}
