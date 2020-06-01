import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
	selector: "app-widget-barchart",
	templateUrl: "./barchart.component.html",
	styleUrls: ["./barchart.component.scss"]
})

export class BarchartComponent implements OnInit {
	chartOptions = {};

	@Input() data: any = [];
	@Input() chartOp: any = {};

	Highcharts = Highcharts;

	constructor() {

	}
	loadNewData() {
		this.chartOptions = {
			chart: {
				type: 'column'
			},
			title: {
				text: this.chartOp.title
			},
			subtitle: {
				text: this.chartOp.subtitle
			},
			xAxis: {
				title: {
					text: this.chartOp.xAxis
				},
				type: 'datetime',
				dateTimeLabelFormats: {
					day: '%e %b %Y'
				},
				crosshair: true
			},
			yAxis: {
				min: 0,
				title: {
					text: this.chartOp.yAxis
				}
			},
			tooltip: {
				//   headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
				//   pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
				//       '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
				//   footerFormat: '</table>',
				//   shared: true,
				//   useHTML: true
			},
			plotOptions: {
				column: {
					pointPadding: 0.2,
					borderWidth: 10
				}
			},
			series: this.data


		};

		//Highcharts.chart('container', this.chartOptions);

		//Highcharts.chart('container', this.chartOptions);
	}


	ngOnChanges(changes: SimpleChanges) {
		console.log(changes['data'].currentValue);
		// this.loadNewData();
	}

	ngOnInit() {
		this.chartOptions = {
			chart: {
				type: 'column'
			},
			title: {
				text: this.chartOp.title
			},
			subtitle: {
				text: this.chartOp.subtitle
			},
			xAxis: {
				title: {
					text: this.chartOp.xAxis
				},
				type: 'datetime',
				dateTimeLabelFormats: {
					day: '%e %b %Y'
				},
				crosshair: true
			},
			yAxis: {
				min: 0,
				title: {
					text: this.chartOp.yAxis
				}
			},
			tooltip: {
				//   headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
				//   pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
				//       '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
				//   footerFormat: '</table>',
				//   shared: true,
				//   useHTML: true
			},
			plotOptions: {
				column: {
					pointPadding: 0.2,
					borderWidth: 20
				}
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

