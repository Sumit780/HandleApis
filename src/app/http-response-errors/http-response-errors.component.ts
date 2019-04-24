import { Component, OnInit } from '@angular/core';
import { ApihandlerService } from '../apihandler.service';

@Component({
  selector: 'app-http-response-errors',
  templateUrl: './http-response-errors.component.html',
  styleUrls: ['./http-response-errors.component.css']
})
export class HttpResponseErrorsComponent implements OnInit {

  urlString="https://www.mocky.io/v2/5c8940da2f0000375dec9762";
  errUrlString="https://www.mocky.io/v2/5c8913332f00008013ec962d";

  error:string;
  names:string[];
  constructor(private apihandlerService:ApihandlerService) { }
  ngOnInit() {
  }

  clear(){
    this.error=null;
    this.names=null;
  }
  fetch():void{
    this.clear();
    this.apihandlerService.getData(this.urlString).subscribe(
      data=>{
        this.names=<string[]>data;
      },
      error=>{
        this.error=error.message;
      }
    );
  }
  fetcherr():void{
    this.clear()
    this.apihandlerService.getData(this.errUrlString).subscribe(
      data=>{
        console.log(data);
        this.names=<string[]>data;
      },
      error=>{
        console.log(error);
        this.error=error.message;
        console.log("error1",this.error);
      }
    );
  }
}
