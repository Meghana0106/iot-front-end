import { Component, OnInit, ViewChild  } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';



export interface PeriodicElement {
  name: string;
  position: number;
  address: string;
  rrnumber: number;
  unit: number;
  amount: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Anitha', address:'Kattriguppe',rrnumber: 4876, unit: 78, amount: 380},
  { position: 2, name: 'Anitha', address:'Kattriguppe',rrnumber: 4876, unit: 78, amount: 380},
  { position: 3, name: 'Anitha', address:'Kattriguppe',rrnumber: 4876, unit: 78, amount: 380},
  { position: 4, name: 'Anitha', address:'Kattriguppe',rrnumber: 4876, unit: 78, amount: 380},
  { position: 5, name: 'Anitha', address:'Kattriguppe',rrnumber: 4876, unit: 78, amount: 380},
  { position: 6, name: 'Anitha', address:'Kattriguppe',rrnumber: 4876, unit: 78, amount: 380},
  { position: 8, name: 'Anitha', address:'Kattriguppe',rrnumber: 4876, unit: 78, amount: 380},
  { position: 9, name: 'Anitha', address:'Kattriguppe',rrnumber: 4876, unit: 78, amount: 380},
  { position: 10, name: 'Anitha', address:'Kattriguppe',rrnumber: 4876, unit: 78, amount: 380},
  { position: 11, name: 'Anitha', address:'Kattriguppe',rrnumber: 4876, unit: 78, amount: 380},
  { position: 12, name: 'Anitha', address:'Kattriguppe',rrnumber: 4876, unit: 78, amount: 380},
  { position: 13, name: 'Anitha', address:'Kattriguppe',rrnumber: 4876, unit: 78, amount: 380},
  { position: 14, name: 'Anitha', address:'Kattriguppe',rrnumber: 4876, unit: 78, amount: 380},
  { position: 15, name: 'Anitha', address:'Kattriguppe',rrnumber: 4876, unit: 78, amount: 380},
  { position: 16, name: 'Anitha', address:'Kattriguppe',rrnumber: 4876, unit: 78, amount: 380},
  { position: 17, name: 'Anitha', address:'Kattriguppe',rrnumber: 4876, unit: 78, amount: 380},
  { position: 19, name: 'Anitha', address:'Kattriguppe',rrnumber: 4876, unit: 78, amount: 380},
  { position: 20, name: 'Anitha', address:'Kattriguppe',rrnumber: 4876, unit: 78, amount: 380},

  
  
];

@Component({
  selector: 'app-consumers',
  templateUrl: './consumers.component.html',
  styleUrls: ['./consumers.component.scss']
})

export class ConsumersComponent implements OnInit {

 

  displayedColumns: string[] = ['position', 'name', 'address', 'rrnumber','unit','amount'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}
