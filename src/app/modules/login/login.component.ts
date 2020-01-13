import { Component, OnInit } from "@angular/core";
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})

export class LoginComponent implements OnInit {
  globals: GlobalService
  constructor(public global: GlobalService) { 
   this.globals = global
  }

  ngOnInit() {

  }

  login() {
    console.log("click logged in");
    this.globals.updatedAuthState(true);
  }


}
