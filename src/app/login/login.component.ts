import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isShow: boolean;
  data = [];

  constructor() {}

  ngOnInit() {
    this.isShow = false;
  }

  toggleShow() {
    this.isShow = !this.isShow;
  }

}
