import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { UploadService } from './../../upload.service';
//import { mimeType } from './mimetype.validator';
import { R3TargetBinder } from '@angular/compiler';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';






@Component({
  selector: 'app-addroom',
  templateUrl: './addroom.component.html',
  styleUrls: ['./addroom.component.css']
})
export class AddroomComponent implements OnInit {

  form : FormGroup
  selected:String;
  selectedFile : File = null;
  roomNumber : Number;
  Type : String;
  description : String = null;
  charges : String = null;

  constructor(private upload : UploadService, private router : Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'description' : new FormControl(null,{validators : [Validators.required]}),
      'charges': new FormControl(null,{validators : [Validators.required]}),
      'image': new FormControl(null,{validators:[Validators.required]})
    })
  }

  addImg : boolean = false;

  imageInput(){
    this.addImg = true;
  }


  imagePath;
  imageURL : any;
  message : string;

  preview(files){
    if(files.length===0)
      return;
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) 
    {
      this.message = "Only images are supported.";
      return;
    }
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => 
    { 
      this.imageURL = reader.result; 
    }
  }

  onImagePicked(event){
    event.preventDefault();
    this.selectedFile = <File>event.target.files[0];
  }

  getSelected(event){
    this.selected=event.target.value;
    
  }

  addRoom(event){

    event.preventDefault()

    this.roomNumber = event.target.querySelector('#roomnumber').value;
    
    this.description = event.target.querySelector('#description').value;
    this.charges = event.target.querySelector('#charges').value;
    console.log("this is room", this.Type);
      
    console.log("this is description from component", this.description);
    
    this.upload.Room(this.roomNumber,this.selected,this.description,this.charges, this.selectedFile).subscribe((data)=>{
      Swal.fire({
        title : 'Success',
        text : 'Room added Successfullt',
        icon : 'success',
        showConfirmButton : false,
        timer : 1100
      });
    })
      this.router.navigateByUrl('Home/Notification');
  }
  
}
