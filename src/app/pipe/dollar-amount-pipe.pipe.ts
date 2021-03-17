import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dollarAmountPipe'
})
export class DollarAmountPipePipe implements PipeTransform {

  transform(value: number): string {
    console.log('😊 DollarAmountPipePipe() called: ', value);
    return '$' + value.toFixed(2);
  }

}
