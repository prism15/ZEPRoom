import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient , HttpHeaders , HttpParams , HttpRequest, HttpResponse } from '@angular/common/http';
import { Image } from './image';

const apiUrl = 'http://localhost:3000/image';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http : HttpClient) { }
  Room(roomNumber,Type,description,charges , selectedFile : File){
    
    console.log("this is the selected file", selectedFile);
    const fd = new FormData();
    fd.append('roomNumber',roomNumber);
    fd.append('Type',Type);
    fd.append('description',description);
    fd.append('charges',charges);
    fd.append('image',selectedFile , selectedFile.name);

    console.log("this is description in upload service",description);
    
    return this.http.post("https://roomservers.herokuapp.com/addRoom",fd )
  }
}
//This service is used for uploading images, remember to import this service while working with addImage
