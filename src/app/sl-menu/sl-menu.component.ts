import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sl-menu',
  templateUrl: './sl-menu.component.html',
  styleUrls: ['./sl-menu.component.scss']
})
export class SlMenuComponent implements OnInit {

  authenticated: boolean;

  constructor() { 
    this.authenticated = false;
  }

  ngOnInit() {
  }

}
