import { Component, OnInit } from '@angular/core';
import { GetroomsService } from './../../getrooms.service';
import { Router } from '@angular/router';
import { VacantModel } from './../../vacant.model';
import { Subscription } from 'rxjs';
import { VacantroomsService } from 'src/app/vacantrooms.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-currentbookings',
  templateUrl: './currentbookings.component.html',
  styleUrls: ['./currentbookings.component.css']
})
export class CurrentbookingsComponent implements OnInit {

  
  public vacantrooms : VacantModel[]= []
  
  constructor( private router : Router , private getroom : GetroomsService , private vacant : VacantroomsService) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = ()=>false;
    this.vacant.getVacantRooms().subscribe((data)=>{
      this.vacantrooms = data['vacantroom'];
    
      console.log("this is vACANT room",this.vacantrooms);
    console.log("this is also vacant room",this.vacantrooms['vacantroom']);
    })         
  }

  makevacant(id : String){
    console.log("this is room id in front end",id);
    this.vacant.makeVacant(id).subscribe();
    Swal.fire({
      title : 'Make Room Vacant',
      text : 'This will make this room vacant for further bookings. Are you sure you want to continue?',
      icon : 'question'
    })
    this.router.navigate(['Home/Notification'])
  }

}
