import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStore {
  public nextLaunch: any;
  public launches: any;
  public page: number = 0;
  public hasMore: boolean = true;
  public nextLaunchTime: number;

  constructor() {}
}
