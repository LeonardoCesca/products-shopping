import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
  title: string = 'Logout'
  initialLogout: boolean = false;
  showLogin: boolean = false;

  @Input() logout;
  @Input() receiveName;

  constructor() { }

  ngOnInit() {
  }

  changeShowLogin() {
    this.showLogin = true;
  }

}
