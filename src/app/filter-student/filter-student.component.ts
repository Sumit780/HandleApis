import { Component, OnInit } from '@angular/core';
import { Course } from '../course';


@Component({
  selector: 'app-filter-student',
  templateUrl: './filter-student.component.html',
  styleUrls: ['./filter-student.component.css']
})
export class FilterStudentComponent implements OnInit {
 
  courseTypes:string[]=['All','Angular','Android','Java','Python'];
  cname:string="";
  data:Course[]=[];
  check:boolean=false;
  
  allStudentData:Course[]=[{name:'James',course:"Angular"},
                            {name:'Mary',course:"Python"},
                            {name:'Bob',course:"Angular"},
                            {name:'Pam',course:"Android"},
                            {name:'Steve',course:"Angular"},
                            {name:'William',course:"Python"},
                            {name:'Julia',course:"Android"},
                            {name:'Matt',course:"Java"},
                            {name:'Martin',course:"Java"},
                            {name:'katherine',course:"Angular"},
                            {name:'Nick',course:"Python"},
                            {name:'tim',course:"Java"},]

  showCourse(){
    if(this.cname=="All")
    {
      this.data=this.allStudentData;
    }else
    this.data=this.allStudentData.filter(item=> item.course == this.cname)  
  }  

  constructor() { }

  ngOnInit() {
    
  }

}
