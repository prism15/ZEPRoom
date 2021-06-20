import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistoryService } from './../../history.service';
import { HistoryModel } from './../../history.model';
import { SearchfilterPipe } from './../searchfilter.pipe';



@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  public history : HistoryModel[]=[];
  searchValue: String;

  constructor(private router : Router, private historyservice : HistoryService) { }

  ngOnInit(): void {
  
      this.historyservice.getHistory().subscribe(async(data)=>{
        this.history = data['history'] ;
        console.log(data);
        console.log("This is your history",this.history) 
      })
      
    
    
    this.router.routeReuseStrategy.shouldReuseRoute = ()=>false;    
  }

  filtervalue;

  filter(event){
    this.filtervalue = event.target.value;
  }

}
