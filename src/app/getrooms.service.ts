import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RoomModel } from './room.model';
import { Subject } from 'rxjs';
import { VacantModel } from './vacant.model';





@Injectable({
  providedIn: 'root'
})
export class GetroomsService {

  constructor(private router : Router ,private http : HttpClient) { }

  private room : RoomModel[] = [];  
  private roomUpdated = new Subject<RoomModel[]>();

  getRooms(){
   
   return this.http.get<{room : RoomModel[]}>("https://roomservers.herokuapp.com/Notification").subscribe((res)=>{
      console.log("this is room",res);
      this.room = res.room;
      this.roomUpdated.next([...this.room]);
    })
  }

  getRoomUpdateListner(){
    return this.roomUpdated.asObservable();
  } 

}
