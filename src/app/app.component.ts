import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from './apiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  apiData:any;
  searchVal:string='';

  constructor(private apiService: ApiserviceService) { }

  title = 'task';

  ngOnInit(){
    this.apiService.getApiMethod().subscribe(res=>{
      console.log(res);
      this.apiData=res;
      
    })
  }
}
