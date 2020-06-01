
import { Component, OnInit, ViewChild  } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';



export interface consumer {
  name: string;
  password: string;
  rr_no: string;
  contact: number;
  c_id: string;
  address:string;
  email:string;
}
const ELEMENT_DATA: consumer[] = [
  { c_id:'', name: '',contact:21328790, email:'', password:'',address:'',rr_no: ''},
  
];


@Component({
  selector: 'app-consumers',
  templateUrl: './consumers.component.html',
  styleUrls: ['./consumers.component.scss']
})

export class ConsumersComponent implements OnInit {


    private matdatasource;

  

  displayedColumns: string[] = ['c_id', 'name','contact', 'email', 'address','rr_no'];
  dataSource = new MatTableDataSource([]);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private dashboardService: DashboardService) {
    this.matdatasource = new MatTableDataSource([]);
   }

  ngOnInit() {
    this.matdatasource.paginator = this.paginator;
     this.getConsumerList()
  }

  getConsumerList() {
    this.dashboardService.getConsumerData().subscribe((res)=>{
      console.log(res);
      this.matdatasource.data = res;
  
    });
  }

}

