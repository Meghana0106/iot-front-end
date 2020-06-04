
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: "app-widget-line",
  templateUrl: "./line.component.html",
  styleUrls: ["./line.component.scss"]
})

export class LineComponent implements OnInit {

  chartOptions = {};

	@Input() data: any = [];
	@Input() chartOp: any = {};

	Highcharts = Highcharts;
  
  constructor() { 

  }

  // loadNewData() {
  //   this.chartOptions = {
  //     chart: {
  //       type: 'line'
  //     },
  //     title: {
  //       text: this.chartOp.title
  //     },
  //     subtitle: {
  //       text: this.chartOp.subtitle
  //     },
  //     xAxis: {
  //       type: 'datetime',
  //       dateTimeLabelFormats: {
  //           day: '%e %b %Y'
  //       }
  //     },

  //     yAxis:[ {title: {
  //         text: "Units (kWh)"
  //       }}
  //     ],
  //     tooltip: {
  //       split: true,
  //       valueSuffix: ' units(kWh)'
  //     },
  //     credits: {
  //       enabled: false
  //     },
  //     exporting: {
  //       enabled: true,
  //     },
  //     series: this.data
  //   };
  //   HC_exporting(Highcharts);
  //  Highcharts.chart('container', this.chartOptions);

  // }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['data'].currentValue);
  //  this.loadNewData();
  }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'line',
        lineColor: 'red'
      },
      title: {
        text: this.chartOp.title
      },
      subtitle: {
        text: this.chartOp.subtitle
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