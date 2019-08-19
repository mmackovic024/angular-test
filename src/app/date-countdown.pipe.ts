import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCountdown'
})
export class DateCountdownPipe implements PipeTransform {
  private MONTH: number = 1000 * 60 * 60 * 24 * 30;
  private DAY: number = 1000 * 60 * 60 * 24;
  private HOUR: number = 1000 * 60 * 60;
  private MIN: number = 1000 * 60;
  private SEC: number = 1000;

  transform(value: number): string {
    const months = Math.floor(value / this.MONTH);
    const days = Math.floor((value % this.MONTH) / this.DAY);
    const hours = Math.floor((value % this.DAY) / this.HOUR);
    const minutes = Math.floor((value % this.HOUR) / this.MIN);
    const seconds = Math.floor((value % this.MIN) / this.SEC);

    const result =
      months +
      (months > 1 ? 'mos ' : 'mo ') +
      days +
      'd ' +
      hours +
      'h ' +
      minutes +
      'm ' +
      seconds +
      's ';

    return result;
  }
}
