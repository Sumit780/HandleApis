import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { NameBool } from '../name-bool';



@Component({
  selector: 'app-filter-student-checkbox',
  templateUrl: './filter-student-checkbox.component.html',
  styleUrls: ['./filter-student-checkbox.component.css']
})
export class FilterStudentCheckboxComponent implements OnInit {
studentInfoArray = [];

  checkboxValue:NameBool[] = [
    {name:'Angular',value:false},
    {name:'Java',value:false},
    {name:'Android',value:false},
    {name:'Python',value:false}
  ]

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

  constructor() { }

filter(){
  let filteredArray=this.checkboxValue.filter(i=>i.value == true).map(j => j.name)
 console.log(filteredArray)
 
  if(filteredArray.length > 0){
    let arrray = [];
    for(let i = 0;i < filteredArray.length; i++){
      arrray=arrray.concat(this.allStudentData.filter(j => j.course == filteredArray[i]));
    }
    this.studentInfoArray=arrray;
  }else{
    this.studentInfoArray=this.allStudentData;
  }
}

  ngOnInit() {
    this.studentInfoArray = this.allStudentData;
 
  }

}
