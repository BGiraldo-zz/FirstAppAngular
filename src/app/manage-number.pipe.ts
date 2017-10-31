import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'manageNumber'
})
export class ManageNumberPipe implements PipeTransform {

  transform(value: number[] , args?: any): any {
   return value.map(here => here* 10);
  }

}
