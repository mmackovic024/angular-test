import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  private page: number = 0;
  private hasMore: boolean = true;
  private itemsPerPage: number = 12;
  isLoading: boolean;
  data: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getMore();
  }

  onScroll() {
    if (this.hasMore) this.getMore();
  }

  getMore() {
    this.isLoading = true;
    if (window.innerWidth < 1100) this.itemsPerPage = 6;
    this.dataService.getAll(this.page, this.itemsPerPage).subscribe(items => {
      if (items.length < this.itemsPerPage) this.hasMore = !this.hasMore;
      this.data ? (this.data = this.data.concat(items)) : (this.data = items);
      this.data.sort(
        (a: { flight_number: number }, b: { flight_number: number }) =>
          a.flight_number - b.flight_number
      );
      this.isLoading = false;
    });
    ++this.page;
  }
}
