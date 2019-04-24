import { Component, OnInit } from '@angular/core';
import { SortObj } from '../sort-obj';


@Component({
  selector: 'app-arr-obj-sort',
  templateUrl: './arr-obj-sort.component.html',
  styleUrls: ['./arr-obj-sort.component.css']
})
export class ArrObjSortComponent implements OnInit {
     allStudents:SortObj[]=[
       {name:'James',course:'Angular',lessons:28,comp:3},
       {name:'Mary',course:'Python',lessons:36,comp:30},
       {name:'Bob',course:'Java',lessons:51,comp:22},
       {name:'Pan',course:'Android',lessons:44,comp:9},
       {name:'Steve',course:'Angular',lessons:28,comp:25},
       {name:'William',course:'Python',lessons:36,comp:16},
       {name:'Julia',course:'Java',lessons:51,comp:30},
       {name:'Matt',course:'Android',lessons:44,comp:25},
     ]
     showStudents:SortObj[]=[];
     sort(sortby:number){
       this.showStudents=[...this.allStudents]
       if(sortby==1){
         this.showStudents.sort(this.comparehigh);
       }
       else if(sortby==2){
            this.showStudents.sort(this.comparelow);
       }
       }
          comparehigh(x:SortObj,y:SortObj):number{
            var x1=x.comp/x.lessons;
            var y1=y.comp/y.lessons;
            return y1-x1;
        }

          comparelow(x:SortObj,y:SortObj):number{
            var x1=x.comp/x.lessons;
            var y1=y.comp/y.lessons;
            return x1-y1;
        }
  constructor() { }

  ngOnInit() {
  }

}
