import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(page => (this.id = page.id));
  }

  ngOnInit() {}
}
