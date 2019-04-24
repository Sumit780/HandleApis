import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ApihandlerService {

  constructor(private httpClient:HttpClient) { }

getData(url){
 return this.httpClient.get<any>(url)
}

postData(url,data){
 return this.httpClient.post(url,data)
}
}
