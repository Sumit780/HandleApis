import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short'
})
export class ShortPipe implements PipeTransform {

  transform(value: string,length:number): any {
           if(value.length>=7){
            return value.substring(0,7)+"...";
           }else
           {
             
             return  value.substring(0,length);
           }
           

           
          
  }

}
