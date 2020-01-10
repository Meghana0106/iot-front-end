import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) { }

  bigChart() {
    return [{
      name: 'Consumption',
      data: [1234, 635, 809, 947, 500, 880, 526,106, 107, 111, 133, 221, 767, 166,502, 635, 809, 947, 102, 634, 526,502, 635, 809, 947, 1402, 3634, 5268,106,234],
      pointStart: Date.UTC(2020, 0, 1),
      pointInterval: 24 * 3600 * 1000
    
    }];
  }

  cards() {
    return [71, 78, 39, 66];
  }

  printRandomData() {
    return this.httpClient.get("https://uselessfacts.jsph.pl/random.json");
  }

  pieChart() {
    return [{
      name: 'Energy Provided',
      y: 61.41,
      sliced: true,
      selected: true
    }, {
      name: 'Consumption per day',
      y: 11.84
    }, {
      name: 'Consumption per month',
      y: 10.85
    }, {
      name: 'Consumption per minute',
      y: 4.67
    }, {
      name: 'Energy Saved per month',
      y: 4.18
    }, {
      name: 'Energy saved per day',
      y: 1.64
    }];
  }
}
