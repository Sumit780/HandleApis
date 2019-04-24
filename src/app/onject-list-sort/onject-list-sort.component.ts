import { Component, OnInit } from '@angular/core';
import { ApihandlerService } from '../apihandler.service';

@Component({
  selector: 'app-onject-list-sort',
  templateUrl: './onject-list-sort.component.html',
  styleUrls: ['./onject-list-sort.component.css']
})
export class OnjectListSortComponent implements OnInit {

  url="https://api.myjson.com/bins/1fvgiq";
  studentData:string[]=[];
  x:boolean=true;
 

  constructor(private apiHandlerService:ApihandlerService) { }

  getData(){
    
   this.apiHandlerService.getData(this.url).subscribe(resp=>{
     this.studentData=resp;
     console.log(this.studentData)
   })
  }


//   sort(x:number){
//     if(x==1){
//      console.log("sort",this.studentData.sort(this.sortname))
//     }
//    if(x==2){
//      console.log( "sort2",this.studentData.sort(this.sortmath))
//   } 
//  }

  sortName(){
    if(this.x==true){
      console.log("sort",this.studentData.sort(this.sortname))
      this.x=false;
     }else
     {
      console.log("sortrev",this.studentData.sort(this.sortname).reverse())
      this.x=true;
     }
  }

  sortMaths(){
    
    if(this.x==true){
      console.log( "sort2",this.studentData.sort(this.sortmath))
      this.x=false;
   } else{
    console.log( "sort2",this.studentData.sort(this.sortmath).reverse())
    this.x=true;
   }
  }
sortmath(a,b){
  if (a.maths < b.maths) {
    return -1;
  }
  if (a.maths > b.maths) {
    return 1;
  }
 
  return 0;
}

sortname(a,b){
  var nameA = a.name.toUpperCase();
  var nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
 
  return 0;
}

  ngOnInit() {
    this.getData();   
  }

}