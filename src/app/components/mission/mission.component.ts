import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { DataStore } from '../../services/data.store';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent implements OnInit {
  id: number;
  launch: object;

  constructor(
    private route: ActivatedRoute,
    private data: DataStore,
    private dataService: DataService
  ) {
    this.route.params.subscribe(page => (this.id = page.id));
  }

  ngOnInit() {
    if (this.data.launches) {
      this.launch = this.data.launches.find(item => item.flight_number == this.id);
    } else {
      this.dataService.getOne(this.id).subscribe(item => (this.launch = item));
    }
  }
}
