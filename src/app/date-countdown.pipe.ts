import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCountdown'
})
export class DateCountdownPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    const months = Math.floor(value / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((value % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((value % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((value % (1000 * 60)) / 1000);

    const result = months + 'm ' + days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
    return result;
  }
}
