import { Component, OnInit } from '@angular/core';
import { ApihandlerService } from '../apihandler.service';


@Component({
  selector: 'app-apiintable',
  templateUrl: './apiintable.component.html',
  styleUrls: ['./apiintable.component.css']
})
export class ApiintableComponent implements OnInit {
  URL="https://api.myjson.com/bins/l8asa";

   
  dataModel:string="";
  seconddataurl:string=""
  firstUrlFetch:any=[];
  secondUrlFetch:any=[];



  constructor(private apihandlerService:ApihandlerService) { }

  findIndex(){
    this.firstUrlFetch.forEach(element=>{
      if(element.classid==this.dataModel){
        this.seconddataurl=element.url;
        console.log("classid",element.classid)
        console.log("url",this.seconddataurl);
      }
    });
  }
   
  getData(){
  this.apihandlerService.getData(this.URL).subscribe(resp=>
    {
      this.firstUrlFetch=resp;
      console.log("firsturl",this.firstUrlFetch)
      console.log("datamodel",this.dataModel)
      // this.dataModel="";
      this.apihandlerService.getData(this.seconddataurl).subscribe(resp1=>{
        this.secondUrlFetch=resp1;

        console.log("url2",this.seconddataurl)
        console.log("url",this.secondUrlFetch)
      })
    })
  
  }

  ngOnInit() {
  }

}
