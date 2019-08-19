import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';
import { DataService } from '../../services/data.service';
import { DataStore } from '../../services/data.store';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateX(-15px)' }),
            stagger(
              '50ms',
              animate('550ms ease-out', style({ opacity: 1, transform: 'translateX(0px)' }))
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class DataComponent implements OnInit {
  private itemsPerPage: number = 12;
  isLoading: boolean;

  constructor(private dataService: DataService, private data: DataStore) {}

  ngOnInit() {
    // fetches data for next launch on top of the home page only if there is no data already
    if (!this.data.nextLaunch) {
      this.dataService.getNext().subscribe(item => {
        this.data.nextLaunch = item;
        this.data.nextLaunchTime = this.data.nextLaunch.launch_date_unix * 1000;
      });
    }

    // fetches data only if there is no data already
    if (!this.data.launches) {
      this.getMore();
    }
  }

  onScroll() {
    // prevents HTTP request if there is no more data to fetch
    if (this.data.hasMore) this.getMore();
  }

  getMore() {
    this.isLoading = true;

    // on smaller screens it fetches smaller chunks of data
    if (window.innerWidth < 1100) this.itemsPerPage = 6;
    this.dataService.getAll(this.data.page, this.itemsPerPage).subscribe(items => {
      // checks if there is more data to fetch
      if (items.length < this.itemsPerPage) this.data.hasMore = false;

      // if there already exists some data then fetched data is added to existing data
      this.data.launches
        ? (this.data.launches = this.data.launches.concat(items))
        : (this.data.launches = items);

      // sometimes second HTTP req finishes before first one
      // this sorts data by flight number
      this.data.launches.sort(
        (a: { flight_number: number }, b: { flight_number: number }) =>
          a.flight_number - b.flight_number
      );
      this.isLoading = false;
    });
    ++this.data.page;
  }
}
