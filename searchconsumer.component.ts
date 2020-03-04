import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


//import * as moment from 'moment';
import { SearchconsumerService } from './searchconsumer.service';

declare var Messenger: any;
// export interface consumer {
  
// }

@Component({
    selector: 'SearchconsumerComponent',
    templateUrl: 'searchconsumer.component.html',
    styleUrls: ['searchconsumer.component.scss']
})
export class SearchconsumerComponent implements OnInit {
   
   

  
    public searchForm: FormGroup;
    public RRNumber = '';
    public searchList: any[];
    
    public currentPage: number = 1;
    public totalCount = 100;
    public pageLimit = 10;

   bigChart = [];
    // SearchconsumerService: any;

       
   ngOnInit() {
     this.bigChart = this.searchconsumerService.bigChart();

       
    }

    constructor(private _formBuilder: FormBuilder,  private route: ActivatedRoute, private searchconsumerService: SearchconsumerService) {

        this.searchForm = this._formBuilder.group({
            RRNumber: [''],
           
        })

        
    }
    

   
      submit() {
        console.log('searchPhone Search', this.searchForm.value);
        console.log('start and end', this.searchForm.value.RRNumber);
        if (this.searchForm.valid) {
            
            this.searchconsumerService.getconsumerByRRnumber(this.searchForm.value.RRNumber)
                .subscribe(
                    (data) => {
                        console.log('Search dataaa', data);
                        //this.searchList = data.consumer;
                    }
                )
        }
     else {
        this.showErrorMessage();
         }
    }

    private showErrorMessage() {

    
        if (!this.searchForm.get('rrNumber').valid) {
            Messenger().post({
                message: 'Please fill RRNumber',
                type: 'error',
                hideAfter: 2,
                showCloseButton: true
            });
        }

    }

}
