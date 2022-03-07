import { Pipe, PipeTransform } from '@angular/core';
import { Speaker } from './_models/speaker';

@Pipe({
  name: 'arraySplice'
})
export class ArraySplicePipe implements PipeTransform {
//TODO
  transform(speakers: Speaker[], searchValue: string) :Speaker[] {
    if(!speakers || !searchValue){
      return speakers;
    }

    return speakers.filter(Speaker=>
      Speaker.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
      Speaker.address.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      );

  }

}
