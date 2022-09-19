import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCustumPipe'
})
export class MyCustumPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === "") {
      return "";
    }
    if(args === 'true') {
      return '{ ' + value + ' }'
    }
     if(args === 'false') {
      return '{{' + value + '}}'
    }
    return value;
  }
}
