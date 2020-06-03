import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sideBarOpen = false;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  constructor() { }

  ngOnInit() { }

  
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  mouseenter() {
    if (!this.sideBarOpen) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.sideBarOpen) {
      this.isShowing = false;
    }
  }

}
