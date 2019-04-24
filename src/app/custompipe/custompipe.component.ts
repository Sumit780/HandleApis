import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {
    // names=['Angular','Python','Java','Android']

    names=['James Smith','Mary Evans','Bob Miken','Pam Shriver','Steven','Williamson','Julia','Matt Monroe','Martains']
    dlen:number=10;
  constructor() { }

  ngOnInit() {
  }

}
