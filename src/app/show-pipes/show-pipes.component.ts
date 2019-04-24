import { Component, OnInit } from '@angular/core';
import { Billpipe } from '../billpipe';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-show-pipes',
  templateUrl: './show-pipes.component.html',
  styleUrls: ['./show-pipes.component.css']
})
export class ShowPipesComponent implements OnInit {
  // date1=new Date(2018,4,23)

 data:Billpipe[]= [{name:'coke',price:0.91,qty:3},
                   {name:'PEPSI',price:1.3,qty:6},
                   {name:'Rice',price:2,qty:5.6},
                   {name:'wheat',price:2.55,qty:7.456}]

    totalBill():number{
   return  this.data.reduce((acc,element)=> acc + (element.qty * element.price),0)
    }               

  constructor() { }

  ngOnInit() {
  }

}
