import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private URL: string = 'https://api.spacexdata.com/v3/launches/past';

  constructor(private http: HttpClient) {}

  getData(page: number = 0, itemsPerPage: number): Observable<object[]> {
    const data = this.http.get<object[]>(
      `${this.URL}?limit=${itemsPerPage}&offset=${page * itemsPerPage}`
    );
    return data;
  }
}
