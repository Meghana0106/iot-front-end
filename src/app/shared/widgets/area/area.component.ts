import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions: {};
  @Input() data: any = [];

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'area'
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
      series: this.data
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
