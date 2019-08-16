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
  data: object[];

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
    this.dataService.getData(this.page, this.itemsPerPage).subscribe(items => {
      if (items.length < this.itemsPerPage) this.hasMore = !this.hasMore;
      this.data ? (this.data = this.data.concat(items)) : (this.data = items);
      this.isLoading = false;
    });
    ++this.page;
  }
}
