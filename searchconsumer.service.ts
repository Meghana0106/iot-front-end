import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class SearchconsumerService  {

  constructor(private httpClient: HttpClient) {
    
  }

  monthlyBill() {
      
    return [{
      name: 'Year 2020',
       
        data: [
          { x: Date.UTC(2020, 0, 1), y: 2000 },
          { x: Date.UTC(2020, 1, 1), y: 2000 },
          { x: Date.UTC(2020, 2, 1), y: 3200 },
          { x: Date.UTC(2020, 3, 1), y: 2300 },
          { x: Date.UTC(2020, 4, 1), y: 2100 },
          { x: Date.UTC(2020,  5, 1), y: 3200 },
          { x: Date.UTC(2020, 6, 1), y: 6200 },
          { x: Date.UTC(2020, 7, 1), y: 5000 },
          { x: Date.UTC(2020, 8, 1), y: 3006 },
          { x: Date.UTC(2020, 9, 1), y: 2306 },
          { x: Date.UTC(2020, 10, 1), y: 2376 },
          { x: Date.UTC(2020, 11, 1), y: 6890 },
          { x: Date.UTC(2020, 12, 1), y: 3099 }
        ],
        
      
    },
   
   
    ];

  }

  
  monthlyConsumption(){

    return [{
      
      
      name: 'Year 2020',
      
       
        data: [
          { x: Date.UTC(2020, 1, 1), y: 20},
          { x: Date.UTC(2020, 1, 2), y: 30 },
          { x: Date.UTC(2020, 1, 3), y: 33 },
          { x: Date.UTC(2020,  1,  4 ), y: 21 },
          { x: Date.UTC(2020,   1, 5), y: 27},
          { x: Date.UTC(2020,  1, 6), y: 28 },
          { x: Date.UTC(2020, 1, 7), y: 50 },
          { x: Date.UTC(2020,  1, 8), y: 39 },
          { x: Date.UTC(2020,  1, 9), y: 36 },
          { x: Date.UTC(2020, 1, 10), y: 37 },
          { x: Date.UTC(2020, 1, 11), y: 68 },
          { x: Date.UTC(2020, 1, 12), y: 36 },
          { x: Date.UTC(2020, 1, 13), y: 30 },
          { x: Date.UTC(2020,  1,  14 ), y: 29 },
          { x: Date.UTC(2020,   1, 15), y: 27},
          { x: Date.UTC(2020,  1, 16), y: 62 },
          { x: Date.UTC(2020, 1, 17), y: 50 },
          { x: Date.UTC(2020,  1, 18), y: 30 },
          { x: Date.UTC(2020,  1, 19), y: 36 },
          { x: Date.UTC(2020, 1, 20), y: 60 },
          { x: Date.UTC(2020, 1, 21), y: 68 },
          { x: Date.UTC(2020, 1, 22), y: 39 },
          { x: Date.UTC(2020, 1, 23), y: 23 },
          { x: Date.UTC(2020,  1,  24 ), y: 21 },
          { x: Date.UTC(2020,   1, 25), y: 20 },
          { x: Date.UTC(2020,  1, 26), y: 62},
          { x: Date.UTC(2020, 1, 27), y: 51 },
          { x: Date.UTC(2020,  1, 28), y: 32 },
          { x: Date.UTC(2020,  1, 29), y: 36 },
          { x: Date.UTC(2020, 1, 30), y: 38 },
          
        ],
        
      
    },
   
   
    ];
  }
  dailyConsumption(){
    return [{
      name: 'Year 2020',
       
        data: [
          { x: Date.UTC(2020, 1, 1), y: 2000 },
          { x: Date.UTC(2020, 2, 1), y: 3200 },
          { x: Date.UTC(2020, 3, 1), y: 3300 },
          { x: Date.UTC(2020, 4, 1), y: 6100 },
          { x: Date.UTC(2020,  5, 1), y: 7200 },
          { x: Date.UTC(2020, 6, 1), y: 6200 },
          { x: Date.UTC(2020, 7, 1), y: 5000 },
          { x: Date.UTC(2020, 8, 1), y: 3006 },
          { x: Date.UTC(2020, 9, 1), y: 7306 },
          { x: Date.UTC(2020, 10, 1), y: 6376 },
          { x: Date.UTC(2020, 11, 1), y: 6890 },
         
        ],
        
      
    },
   
   
    ];

  }
  
  hourlyConsumption() {
return [{
  name: '13pm',
  y: 1.64,
    colorByPoint: true,
  sliced: true,
  selected: true
},
{
  name: '14pm',
  y: 1.64
}, {
  name: '15pm',
  y: 1.6
}, {
  name: '16pm',
  y: 1.2
}, {
  name: '17pm',
  y: 2.61
},
{
name: '18pm',
y: 2.61
},
{
name: '19pm',
y: 2.61
} ,
{
name: '20pm',
y: 2.61
} ,
{
name: '21pm',
y: 2.61
} ,
{
name: '22pm',
y: 2.61
} ,
{
name: '23pm',
y: 2.61
} ,
{
name: '24am',
y: 2.61
} ,
{
name: '1am',
y: 2.61
} ,
{
name: '2am',
y: 2.61
} ,
{
name: '3am',
y: 2.61
} ,
{
name: '4am',
y: 2.61
} ,
{
name: '5am',
y: 2.61
} ,
{
name: '6am',
y: 2.61
} ,
{
name: '7am',
y: 2.61
} ,
{
name: '8am',
y: 2.61
} ,
{
name: '9am',
y: 2.61
} ,
{
name: '10am',
y: 2.61
} ,
{
name: '11am',
y: 2.61
} ,
{
name: '12pm',
y: 2.61
} ,
];
}
cards() {
return [71, 78, 39, 66];
}
// getmonthlyDataBill() {
//   return this.httpClient.get("http://localhost:3000/consumption");

// }
public getConsumptionByRRNumber(RRNumber: string) {
// const url=`http://localhost:3000/consumptionPerYear/${RRNumber="987654321"}`;
const url=`http://localhost:3000/consumptionPerYear/${6543}`;
 return this.httpClient.get<any[]>(url);

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
