import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-sort',
  templateUrl: './array-sort.component.html',
  styleUrls: ['./array-sort.component.css']
})
export class ArraySortComponent implements OnInit {

  //  myarr:string[]=['Angular','Python','Spring','Java','Android',];
   student:string[]=['James','Amy','Martha','Bob','Kathy']
   sortDropDown:string[]=['Ascending','Descending','NoSort']
  
  name:string='';
  sortDropDownItem='';
  arrtemp:string[]=[];
  constructor() { }

  // arrayPush(){
  //  this.student.sort();
  //  this.student.push(this.name);
  //  this.student.sort();
  //  this.name="";
  //  console.log( this.student.sort());
  // }

  itemSort(){
    this.arrtemp=[...this.student]
    console.log(this.arrtemp)
    if(this.sortDropDownItem == "Ascending"){
      this.arrtemp.sort();
      console.log("Asc",this.arrtemp.sort());
    }else if(this.sortDropDownItem == "Descending"){
       this.arrtemp.reverse();
       console.log("Des",this.arrtemp.sort().reverse());
    }else if(this.sortDropDownItem=="NoSort"){
        this.arrtemp=this.student;
    }
    
  }

   addName(){
    this.student.push(this.name);
    this.name="";;
    console.log(this.student);
}
  ngOnInit() {

 
    // this.myarr.sort();
    // console.log("myarr:",this.myarr)
    // console.log("myarr",this.myarr.join(":"));
    // var temparr=[...this.myarr];
    // console.log("temparr",temparr)
    // console.log("temparr",temparr.join("::"))
    

  }

}
