import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  globals: GlobalService;
  loggedIn = false;

  constructor(public global: GlobalService) {
    this.globals = global;
   }

  ngOnInit() {
    this.globals.getIsLgogedInObs()
            .subscribe(flag => {
                if(flag) {
                  this.loggedIn = true;
                } else {
                  this.loggedIn = false;
                }
                console.log(this.loggedIn);
                // this.message = message;
            });
  }

}
