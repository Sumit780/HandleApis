import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-sort',
  templateUrl: './number-sort.component.html',
  styleUrls: ['./number-sort.component.css']
})
export class NumberSortComponent implements OnInit {

 arrnumber:number[]=[5,10,25,4,36,6]
 arrnumber2:number[]=[	5,	8,	42,	-6,	-50,	33,	-10,	22,	-25]
 arrString:string[]=['James','Jack','Bob','Margaret','Kathy','William','Steven','Ed'];

  constructor() { }

  ngOnInit() {

    console.log("number",this.arrnumber2);
    console.log("numbersort",this.arrString.sort(this.arrlength));
    console.log("numbersort",this.arrString.sort(this.arrlength).reverse());

    // var arrnum=[...this.arrnumber]
    // console.log("numbersort",arrnum.join(":"));
    // console.log("arrnumbersort", arrnum.sort(this.sortnum));
    // console.log("arrngnumbersort", arrnum.reverse());

  }

  arrlength(a,b){
    return  a.length -b.length;
  }

sortnum(a, b) {
  if (a >b) {
    return 1;
  }
  else if(a == b) {
    return 0;
  }else
  {
    return -1;
  } 
  
}

}


