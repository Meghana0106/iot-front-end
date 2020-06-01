import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ConsumersComponent } from 'src/app/modules/consumers/consumers.component';
import { SearchconsumerComponent} from 'src/app/modules/searchconsumer/searchconsumer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { LoginComponent } from 'src/app/modules/login/login.component';
 import { GlobalService } from '../../global.service';
//  import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 import {CreateComponent} from 'src/app/modules/create/create.component';
 

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ConsumersComponent,
    LoginComponent,
    SearchconsumerComponent,
    CreateComponent
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    // NgbModule
  ],
  providers: [
    DashboardService,
  
  ]
})
export class DefaultModule { }
