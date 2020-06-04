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
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { MDBBootstrapModule } from 'angular-bootstrap-md';
// import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent  
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  imports: [
    // FormGroup,
    CommonModule,
     ReactiveFormsModule,
     FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DefaultModule,
   
    // NgSelectModule,
    // MDBBootstrapModule.forRoot()
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent],
  exports: [
    
  ]
})
export class AppModule { }
