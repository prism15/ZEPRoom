import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { VacantModel } from './vacant.model';
import { Subject, Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class VacantroomsService {

  
  constructor(private router : Router, private http : HttpClient) { }

  getVacantRooms(): Observable<VacantModel[]>{
    return this.http.get<VacantModel[]>("https://roomservers.herokuapp.com/Currentbookings/booked");
  }

  makeVacant(id : String){
    console.log("this is id",id);
    return this.http.post("https://roomservers.herokuapp.com/currentbookings/makevacant", {id:id});
  }
}
