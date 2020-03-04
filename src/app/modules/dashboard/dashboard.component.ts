import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { HttpClient } from '@angular/common/http';

export interface consumer {
}
export interface Month{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public MonthArray= [
    { value: '13', viewValue: 'Select' },
    { value: '0', viewValue: 'Jan' },
    { value: '1', viewValue: 'Feb' },
    { value: '2 ', viewValue: 'March' },
    { value: '3', viewValue: 'April' },
    { value: '4', viewValue: 'May' },
    { value: '5', viewValue: 'June' },
    { value: '6', viewValue: 'July' },
    { value: '7', viewValue: 'August' },
    { value: '8', viewValue: 'September' },
    { value: '9', viewValue: 'October' },
    { value: '10', viewValue: 'november'},
    { value: '11', viewValue: 'December' },
  ];

  bigChart = [];
  cards = [];
  pieChart = [];
  selectedMonth = 0;

 
  chartOptions: {};
  
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private dashboardService: DashboardService, private httpClient: HttpClient) { }

  ngOnInit() {
    this.bigChart = this.bigChartData(0);
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();

    
  }

  loadNewData() {
    this.chartOptions = {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Consumption Per Day'
      },
      subtitle: {
        text: 'Houshold Consumption'
      },
      xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
            day: '%e %b %Y'
        }
      },

      yAxis:[ {title: {
          text: "Units (kWh)"
        }}
      ],
      tooltip: {
        split: true,
        valueSuffix: ' units(kWh)'
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true,
      },
      series: this.bigChart
    };
  }

  printData() {
    //  this.dashboardService.printConsumerData().subscribe((data)=>{
    //    console.log(data);
    //  });
  }

   //event handler for the select element's change event
  onSelectMonth (event: any) {
    //update the ui
    this.selectedMonth = event.target.value;
    console.log(this.selectedMonth);
    this.bigChart = [];
    this.bigChart = this.bigChartData(this.selectedMonth);
  }

  bigChartData( month: number) {
    return [{
      name: 'Household Consumption',
      data: [1234, 635, 1809, 1947, 1500, 2280, 2526,1106, 1107, 1111, 1303, 2021, 1234, 635, 1809, 1947, 1500, 2280, 2526,1106, 1107, 1111, 1303, 2021,2280, 2526,1106, 1107, 1111, 1303, 2021, 1234],
      pointStart: Date.UTC(2020, month, 1),
      pointInterval: 24 * 3600 * 1000
    },
    {
    name: ' Industrial Consumption',
    data: [2234, 4635, 2809, 3947, 2500, 3880, 3526,3106, 2107, 2011, 3233, 3221, 2234, 4635, 2809, 3947, 2500, 3880, 3526,3106, 2107, 2011, 3233, 3221,3880, 3526,3106, 2107, 2011, 3233, 3221, 2234],
    pointStart: Date.UTC(2020, month, 1),
    pointInterval: 24 * 3600 * 1000
    },
    {
      name: ' Total Consumption',
      data: [3468, 5270, 4618, 5894, 4000, 6160, 6052,4212, 3214, 3122, 4536, 5242, 3468, 5270, 4618, 5894, 4000, 6160, 6052,4212, 3214, 3122, 4536, 5242,6160, 6052,4212, 3214, 3122, 4536, 5242, 3468],
      pointStart: Date.UTC(2020, month, 1),
      pointInterval: 24 * 3600 * 1000
      }
    ];

  }

}
