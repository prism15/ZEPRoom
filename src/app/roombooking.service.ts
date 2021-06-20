import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RoombookingService {

  constructor(private http : HttpClient) { }

  status = "False";

  bookRoom(Name,Phone,documentName,documentNumber,startDate,endDate,Amount,roomid,roomNumber, status){

    return this.http.post("https://roomservers.herokuapp.com/bookroom", {
      Name : Name,
      Phone : Phone,
      documentName : documentName,
      documentNumber : documentNumber,
      startDate : startDate,
      endDate : endDate,
      Amount : Amount , 
      roomid : roomid,
      roomNumber : roomNumber,
      status : status    
    });
  }
}
