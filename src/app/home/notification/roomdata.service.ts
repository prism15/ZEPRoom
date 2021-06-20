import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomdataService {

  constructor() { }

  roomid;
  roomcharges;
  roomNumber;

  getRoomData(id, charges,roomNumber){
    this.roomid = id;
    this.roomcharges = charges;
    this.roomNumber = roomNumber

    console.log("this is id in service", this.roomid);
  }
}
