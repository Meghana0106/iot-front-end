import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { GlobalService } from './global.service';
import { CommonModule} from '@angular/common';
// import { MDBBootstrapModule } from 'angular-bootstrap-md';
// import { NgSelectModule } from '@ng-select/ng-select';
import { MatSelectModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    // FormGroup,
    CommonModule,
     ReactiveFormsModule,
     FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    DefaultModule,
    // NgSelectModule,
    // MDBBootstrapModule.forRoot()
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent],
  exports: [
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class AppModule { }
