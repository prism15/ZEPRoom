import { Component, Input, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RoombookingService } from 'src/app/roombooking.service';
import { RoomModel } from './../../../room.model';
import { RoomdataService } from './../roomdata.service';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import Swal from 'sweetalert2';





@Component({
  selector: 'app-bookroom',
  templateUrl: './bookroom.component.html',
  styleUrls: ['./bookroom.component.css']
})

export class BookroomComponent implements OnInit {


  constructor(private roomdata : RoomdataService , private roombook : RoombookingService , private router : Router) { }

  @Input() room : RoomModel[];

  Name : String;
  Phone : Number;
  documentName : String;
  documentNumber : String;
  startDate : Date;
  endDate : Date;
  Amount : Number;
  startpipe;
  

  showcontent:String;

  startdate : Date;
  enddate : Date;

  date1;  
  date2;

  total;
  days;

  room_id;
  roomcharges;
  roomnumber;

  payable : number;

  ngOnInit(): void {
    this.room_id = this.roomdata.roomid;
    this.roomcharges = this.roomdata.roomcharges;
    this.roomnumber = this.roomdata.roomNumber;
  }
  setvalue(event){
    this.showcontent= event.target.value; 
    console.log(this.showcontent);
  }
  
  getTotalDays(){
    this.date1 = new Date(this.startdate);
    this.date2 = new Date(this.enddate);
    this.total = (this.date2- this.date1)/(1000*60*60*24);
    this.days = Math.round(this.total);
    this.payable = this.days * this.roomcharges;
    console.log(this.days);
  }

  bookRoom(event){
    event.preventDefault()
    
    this.Name = event.target.querySelector('#customerName').value;
    this.Phone = event.target.querySelector('#phone').value;
    this.startDate = event.target.querySelector('#startdate').value;
    this.endDate = event.target.querySelector('#enddate').value;
    console.log("this is the startDate before sending",this.startDate);
    
    
    
    let date1 = formatDate(new Date() , 'yyyy-MM-dd' , 'en_US');
    let StartDate = formatDate(this.startdate,'yyyy-MM-dd' , 'en_US');
    let EndDate = formatDate(this.endDate , 'yyyy-MM-dd','en_US');
    
    
    if(StartDate < date1)
    {
      Swal.fire({
        title : "Error",
        text : "You cannot book room with past date",
        icon : "error",
        timer : 1700
      })
    }else{
      
      if(StartDate > date1)
      {
        status = "pre-booked"
      }else{
        status = "Booked";
      }
      if(this.showcontent === "AdhaarCard"){
        this.documentNumber = event.target.querySelector('#adhaarno').value;
      }else if(this.showcontent === "PanCard"){
        this.documentNumber = event.target.querySelector('#panno').value;
      }else {
        this.documentNumber = event.target.querySelector('#dno').value;
      }
      console.log("roomId before sending",this.room_id);
      this.roombook.bookRoom(this.Name,this.Phone,this.showcontent,this.documentNumber,StartDate,EndDate,this.payable,this.room_id,this.roomnumber, status).subscribe((data)=>{
      Swal.fire('Booked','success');
      console.log("this is Name before sending", this.roomnumber);
      console.log(data);
      this.router.navigateByUrl('Home/Notification');
    })
    }

    
  }

  

}
