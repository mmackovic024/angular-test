import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { DataStore } from './data.store';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private URL_PAST: string = 'https://api.spacexdata.com/v3/launches/past';
  private URL_NEXT: string = 'https://api.spacexdata.com/v3/launches/next';
  private URL_ONE: string = 'https://api.spacexdata.com/v3/launches/';

  constructor(private http: HttpClient) {}

  getAll(page: number = 0, itemsPerPage: number): Observable<object[]> {
    return this.http.get<object[]>(
      `${this.URL_PAST}?limit=${itemsPerPage}&offset=${page * itemsPerPage}`
    );
  }

  getNext() {
    return this.http.get<object>(this.URL_NEXT);
  }

  getOne(id: number) {
    return this.http.get<object>(`${this.URL_ONE}${id}`);
  }
}
