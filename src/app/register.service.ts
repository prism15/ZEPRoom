import { HttpClient , HttpResponse , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


interface registerResponse{
  success : boolean
}
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http : HttpClient) { }

   baseUrl = "http://localhost:3000";

  getUserDetails(firstname,lastname,email,password){
    
    
    return this.http.post<registerResponse>("https://roomservers.herokuapp.com/signup",{
      firstname : firstname,lastname:lastname,email:email,password:password
    });
  }
}
