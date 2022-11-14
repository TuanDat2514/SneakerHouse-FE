import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyVND'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number): number {
    return value*1000;
  }

}
