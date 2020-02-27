import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {SearchconsumerService } from './searchconsumer.service';
import { HttpClient,HttpHeaders} from '@angular/common/http';

import { GlobalService } from 'src/app/global.service';

declare var Messenger: any;
export interface consumer{
  //   name: string;
  // rrno: number;
  // contact: number;
  // c_id: number;
  // address:string;
    
  }
@Component({
  selector: "app-searchconsumer",
  templateUrl: "./searchconsumer.component.html",
  styleUrls: ["./searchconsumer.component.scss"]
})

export class SearchconsumerComponent implements OnInit {
  public searchForm: FormGroup;
    public RRNumber = '';
    public searchList: any[];
    
    public currentPage: number = 1;
    public totalCount = 100;
    public pageLimit = 10;

   barchart = [];
   pieChart = [];
   monthlyBill = [];
   yearlyConsumption = [];
   dailyConsumption = [];
   monthlyConsumption = [];
   monthlyBillChartOption = {};
   monthlyDataBillChartOption = {};
   dailyConsumptionChartOption = {};
   monthlyConsumptionChartOption = {};
   hourlyConsumption = [];
   hourlyConsumptionChartOption = {};
   yearConsumptionChartOption = {};
  
   consumerData = {}
  
   constructor(private zone: NgZone, private formBuilder: FormBuilder, private global:GlobalService,  private route: ActivatedRoute, private searchConsumer:SearchconsumerService,private httpClient: HttpClient) {

    this.searchForm = this.formBuilder.group({
        RRNumber: [''],
       
    })
}

  ngOnInit() {
     this.monthlyBill = this.searchConsumer.monthlyBill();
     this.dailyConsumption = this.searchConsumer.dailyConsumption();
     this.monthlyConsumption = this.searchConsumer.monthlyConsumption();
     this.hourlyConsumption = this.searchConsumer.hourlyConsumption();

     //this.yearlyConsumption = this.searchConsumer.dailyConsumption();

     this.getConsumptionList() ;
     
     this.monthlyBillChartOption = {
        
          title: 'Yearly Consumption',
          subtitle: 'per Month',
          yAxis: 'Total Unit Used',
          xAxis:'month'
        
      };

      this.dailyConsumptionChartOption = {
        
        title: 'Daily Consumption ',
        subtitle: 'per consumers',
        yAxis: 'unit in (Kwh)',
        xAxis:'day'
      
      
    };
    this.monthlyConsumptionChartOption = {
        
        title: 'Monthly Consumption',
        subtitle: 'per consumers',
        yAxis: 'unit in (Kwh)',
        xAxis:'month'
      
    };

    this.yearConsumptionChartOption = {
        
      title: 'Year Consumption',
      subtitle: 'per consumers',
      yAxis: 'unit in (Kwh)',
      xAxis:'Year'
    
  };
   this. hourlyConsumptionChartOption = {
    title: 'Hourly Consumption',
   };

  }


  getConsumptionList() {
    this.searchConsumer.getConsumptionByRRNumber(this.searchForm.value.RRNumber).subscribe((res)=>{
      
      var data = [];
       res.forEach(function (value)  {
         data.push({x: Date.parse(value.x), y: parseInt(value.y) })
       });
       console.log("dddddd",data, this.dailyConsumption);
       this.zone.run(() => {
      this.yearlyConsumption = [{
        name: 'Year 2020',
         
          data: data,
          
    
      },
     
     
      ];
    });
      // this.matdatasource.data = res;
      console.log("dddddd",data, this.dailyConsumption, this.yearlyConsumption);
    });
  }
  
  
  submit() {
      
    console.log('searchRRNumber Search', this.searchForm.value);
    console.log('start and end', this.searchForm.value.RRNumber);
    if (this.searchForm.valid) {
        
        this.searchConsumer.getconsumerByRRnumber(this.searchForm.value.RRNumber).subscribe(
            
                (data) => {
                    console.log('Search dataaa', data);
                    this.consumerData = data[0];

                }
            );
    }
 else {
    this.showErrorMessage();
     }
}

private showErrorMessage() {


    if (!this.searchForm.get('RRNumber').valid) {
        Messenger().post({
            message: 'Please Enter Your RRNumber',
            type: 'error',
            hideAfter: 2,
            showCloseButton: true
        });
    }

}


}
