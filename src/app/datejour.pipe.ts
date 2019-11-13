import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datejour'
})
export class DatejourPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
