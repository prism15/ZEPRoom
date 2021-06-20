import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HistoryModel } from './history.model';




@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http : HttpClient) { }

  getHistory():Observable<HistoryModel[]>{
    return this.http.get<HistoryModel[]>("https://roomservers.herokuapp.com/History/history");
  }
}
