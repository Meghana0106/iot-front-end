
import { Component, OnInit, ViewChild  } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';



export interface consumer {
  name: string;
  password: string;
  rrno: number;
  contact: number;
  c_id: number;
  address:string;
}
const ELEMENT_DATA: consumer[] = [
  { c_id:1, name: '',contact:21328790, password:'',address:'',rrno: 98674876},
  
  
  
];


@Component({
  selector: 'app-consumers',
  templateUrl: './consumers.component.html',
  styleUrls: ['./consumers.component.scss']
})

export class ConsumersComponent implements OnInit {


    private matdatasource;

  

  displayedColumns: string[] = ['c_id', 'name','contact','address','rrno'];
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

