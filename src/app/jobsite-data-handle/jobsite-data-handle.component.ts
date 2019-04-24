import { Component, OnInit } from '@angular/core';
import { ApihandlerService } from '../apihandler.service';


@Component({
  selector: 'app-jobsite-data-handle',
  templateUrl: './jobsite-data-handle.component.html',
  styleUrls: ['./jobsite-data-handle.component.css']
})
export class JobsiteDataHandleComponent implements OnInit {

   

  constructor(private apihandlerService:ApihandlerService) { }

 

  ngOnInit() {
  }

}
