import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent implements OnInit {
  id: number;
  launch: object;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.route.params.subscribe(page => (this.id = page.id));
  }

  ngOnInit() {
    this.dataService.getOne(this.id).subscribe(launch => (this.launch = launch));
  }
}
