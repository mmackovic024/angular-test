import { Component } from '@angular/core';

@Component({
  selector: 'app-clock',
  template: `
    <p>
      {{ date | date: 'MMM dd, yyyy.  HH:mm:ss' }}
    </p>
  `
})
export class ClockComponent {
  date: Date;
  private timer = null;

  ngOnInit() {
    this.setCurrentTime();
    this.timer = this.updateTime();
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  private setCurrentTime() {
    this.date = new Date(Date.now());
  }

  private updateTime() {
    setInterval(() => {
      this.setCurrentTime();
    }, 1000);
  }
}
