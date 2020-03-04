import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class SearchconsumerService {

    constructor(private httpClient: HttpClient) {


    }
    bigChart() {
        return [{
          name: 'Household Consumption',
          data: [1234, 635, 1809, 1947, 1500, 2280, 2526,1106, 1107, 1111, 1303, 2021, 1234, 635, 1809, 1947, 1500, 2280, 2526,1106, 1107, 1111, 1303, 2021,2280, 2526,1106, 1107, 1111, 1303, 2021, 1234],
          pointStart: Date.UTC(2020, 0, 1),
          pointInterval: 24 * 3600 * 1000
        },
        {
        name: ' Industrial Consumption',
        data: [2234, 4635, 2809, 3947, 2500, 3880, 3526,3106, 2107, 2011, 3233, 3221, 2234, 4635, 2809, 3947, 2500, 3880, 3526,3106, 2107, 2011, 3233, 3221,3880, 3526,3106, 2107, 2011, 3233, 3221, 2234],
        pointStart: Date.UTC(2020, 0, 1),
        pointInterval: 24 * 3600 * 1000
        },
        {
          name: ' Total Consumption',
          data: [3468, 5270, 4618, 5894, 4000, 6160, 6052,4212, 3214, 3122, 4536, 5242, 3468, 5270, 4618, 5894, 4000, 6160, 6052,4212, 3214, 3122, 4536, 5242,6160, 6052,4212, 3214, 3122, 4536, 5242, 3468],
          pointStart: Date.UTC(2020, 0, 1),
          pointInterval: 24 * 3600 * 1000
          }
        ];
    
      }
    
      cards() {
        return [71, 78, 39, 66];
      }
    
    getConsumerData() {
        return this.httpClient.get("http://localhost:3000/consumer");
    
      }
   
    public getSearchByconsumer(consumerId: string) {
        const url= `http://localhost:3000/consumer?consumerId=${consumerId}`;
        return this.httpClient.get(url);
    }

    public getSearchconsumerByServiceAccountIdCount(consumerId: string) {
        const url= `http://localhost:3000/consumer?consumerId=${consumerId}`;
        return this.httpClient.get(url);
    }

    public getconsumerByRRnumber( RRNumber: string) {
        const url= `http://localhost:3000/consumer/${RRNumber}`;
        return this.httpClient.get(url);
    }
}