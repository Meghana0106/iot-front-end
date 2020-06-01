

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
	providedIn: 'root'
})
export class DashboardService {

	constructor(private httpClient: HttpClient) { }

	bigChart() {
		return [{
			name: 'Household Consumption',
			data: [1234, 635, 1809, 1947, 1500, 2280, 2526, 1106, 1107, 1111, 1303, 2021, 1234, 635, 1809, 1947, 1500, 2280, 2526, 1106, 1107, 1111, 1303, 2021, 2280, 2526, 1106, 1107, 1111, 1303, 2021, 1234],
			pointStart: Date.UTC(2020, 0, 1),
			pointInterval: 24 * 3600 * 1000
		},
		{
			name: ' Industrial Consumption',
			data: [2234, 4635, 2809, 3947, 2500, 3880, 3526, 3106, 2107, 2011, 3233, 3221, 2234, 4635, 2809, 3947, 2500, 3880, 3526, 3106, 2107, 2011, 3233, 3221, 3880, 3526, 3106, 2107, 2011, 3233, 3221, 2234],
			pointStart: Date.UTC(2020, 0, 1),
			pointInterval: 24 * 3600 * 1000
		},
		{
			name: ' Total Consumption',
			data: [3468, 5270, 4618, 5894, 4000, 6160, 6052, 4212, 3214, 3122, 4536, 5242, 3468, 5270, 4618, 5894, 4000, 6160, 6052, 4212, 3214, 3122, 4536, 5242, 6160, 6052, 4212, 3214, 3122, 4536, 5242, 3468],
			pointStart: Date.UTC(2020, 0, 1),
			pointInterval: 24 * 3600 * 1000
		}
		];

	}

	cards() {
		return [71, 78, 39, 66];
	}

	getConsumer(rr_no: number): Observable<any> {
		return this.httpClient.get("http://localhost:3000/consumer");
	  }

	  
	getConsumerData() {
		return this.httpClient.get("http://localhost:3000/consumer");

	}
	getConsonsumptionData() {
		return this.httpClient.get("http://localhost:3000/consumption");

	}
	createConsumerData() {
		const body = {
            c_id:'87676',
			name: 'aaa',
			contact: '2212121221',
			email:'ani@gmail.com',
			rr_no: 'AB8676',
			address: 'aaav'
		}
		return this.httpClient.post("http://localhost:3000/consumer", body).subscribe(
			res => {
				console.log(res);
			},
			err => {
				console.log('err:' + err);
			}
		);
	}

	getLoginData() {
		const body = {
            username:'anitha',
			password: 'anitha1397'
			
		}
		return this.httpClient.post("http://localhost:3000/account", body).subscribe(
			res => {
				console.log(res);
			},
			err => {
				console.log('err:' + err);
			}
		);
	}



	pieChart() {
		return [{
			name: 'Total Household consumption',
			y: 60.41,
			sliced: true,
			selected: true
		}, {
			name: 'Total Industrial consumption',
			y: 39.59

		}];
	}
}
