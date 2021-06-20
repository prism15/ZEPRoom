import { Component, OnInit, ViewChild } from '@angular/core';
import { GetroomsService } from './../../getrooms.service';
import { Router } from '@angular/router';
import { RoomModel } from './../../room.model';
import { Subscription } from 'rxjs';
import { RoomdataService } from './roomdata.service';







@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  room : RoomModel[] = [];
  SubRoom : Subscription;
  

  constructor(private router : Router, private getroom : GetroomsService , private roomdata : RoomdataService) { }

  

  ngOnInit(): void {
    this.getroom.getRooms();
    this.SubRoom = this.getroom.getRoomUpdateListner().subscribe((room: RoomModel[]) => {
      this.room = room;
      
    });
    this.router.routeReuseStrategy.shouldReuseRoute = ()=>false;
  }

  getRoomDetails(id,charges,roomNumber){
    this.roomdata.getRoomData(id , charges,roomNumber);
  }


}
