import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { DataStore } from '../../services/data.store';

@Component({
  selector: 'app-next-launch',
  templateUrl: './next-launch.component.html',
  styleUrls: ['./next-launch.component.scss']
})
export class NextLaunchComponent implements OnInit, OnDestroy {
  time: number;
  private timer;

  constructor(public data: DataStore) {}

  ngOnInit() {
    this.setCurrentTime();
    this.timer = setInterval(() => this.setCurrentTime(), 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  private setCurrentTime = () => {
    this.time = this.data.nextLaunchTime - Date.now();
  };
}
