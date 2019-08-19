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
  launch: any;

  constructor(
    private route: ActivatedRoute,
    private data: DataStore,
    private dataService: DataService
  ) {
    this.route.params.subscribe(page => (this.id = page.id));
  }

  ngOnInit() {
    if (this.data.launches) {
      // find data for mission if mission page is visited by clicking link on home page
      this.launch = this.data.launches.find(item => item.flight_number == this.id);
    } else {
      // fetch data for one mission if mission page is visited by typing URL
      this.dataService.getOne(this.id).subscribe(item => (this.launch = item));
    }
  }
}
