import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-object-copy',
  templateUrl: './object-copy.component.html',
  styleUrls: ['./object-copy.component.css']
})
export class ObjectCopyComponent implements OnInit {

  // st:Student={name:'Jares',course:'Angular',lessons:28,comp:3}
    
  // values:number[]=[15,18,11,10,6,7,25,30,2]
  // val:number[];

  courses:string[]=['Angular','Python','Java','Javascript','AngularJS','Android','PHP']
    showCourses:string[];
    srch:string="";
    toshow:boolean=false;
    
  constructor() { }
   
   show(){
     this.showCourses=this.courses.filter(item=>this.filterCourse(item))
     this.toshow=true;
    }
    noshow(){
      this.toshow=false;
    }


   filterCourse(cname:string):boolean{
       return  cname.toUpperCase().startsWith(this.srch.toUpperCase())
   }

//   filtervalues(){
//     this.val= this.values.filter(n1=>this.check(n1))  
//   }

// check(x:number):boolean{
//   return x%3==0;
// }
  ngOnInit() {

   

    // console.log(this.st);
    // console.log(JSON.stringify(this.st))
    // var s1=Object.assign({},this.st)
    // console.log("s1",JSON.stringify(s1))
    // this.st.comp=18;
    // this.st.name='Jares Smith';
    // console.log("st",JSON.stringify(this.st))
    // console.log("s1",JSON.stringify(s1))
  }

}
