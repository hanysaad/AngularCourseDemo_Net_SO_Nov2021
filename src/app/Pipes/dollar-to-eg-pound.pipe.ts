import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dollarToEgPound'
})
export class DollarToEgPoundPipe implements PipeTransform {

  transform(amountInUSD:number, convRate:number=15): number {
    return amountInUSD * convRate;
  }

}
