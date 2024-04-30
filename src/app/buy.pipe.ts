import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buy',
  pure: true,
  standalone:true
})
export class BuyPipe implements PipeTransform {

  transform(title:string): string {
    return `Buy ${title}`;
  }

}
