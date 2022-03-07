import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerTox'
})
export class PowerToxPipe implements PipeTransform {

  transform(value1: number ,value2:number=1): unknown {
    return Math.pow(value1,value2);
  }

}
