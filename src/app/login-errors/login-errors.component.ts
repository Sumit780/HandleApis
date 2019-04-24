import { Component, OnInit } from '@angular/core';
import { ApihandlerService } from '../apihandler.service';

@Component({
  selector: 'app-login-errors',
  templateUrl: './login-errors.component.html',
  styleUrls: ['./login-errors.component.css']
})
export class LoginErrorsComponent implements OnInit {
   


 err1="https://httpstat.us/500"
 err2="https://httpstat.us/402"
 err3="https://httpstat.us/400"
 err4="https://httpstat.us/403"

  
  urlSuccess="https://testingthings.free.beeceptor.com/user/";
  
  success:string="";
  error:number=0 
  errmsg="";
  name:string="";
  msg:string="";

  constructor(private apihandlerService:ApihandlerService ) { }

submit(){
  this.success="";
  this.error=0; 
  this.apihandlerService.getData(this.err4)
  .subscribe(data=>{
    this.success=JSON.stringify(data);
    this.msg="login successful:Welcome to my page";
    console.log(this.msg)
  },
  error=>{
    this.error=error.status;
    if(this.error==400){
          this.errmsg="“Bad	Request	– Server	did	not	understand the	request"
    }else if(this.error==500){
      this.errmsg="Internal	Server	Error	– Server	threw	an exception"
    }else if(this.error==402){
      this.errmsg=" Payment	required	– Server	is	demanding some	payment"
    }else if(this.error==403){
      this.errmsg="Forbidden	– Not	allowed	to	access"
    }

  }
  )
}
  
  ngOnInit() {
  }

}
