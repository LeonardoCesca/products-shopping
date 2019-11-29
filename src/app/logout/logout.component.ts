import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {

  @Input() logout;

  constructor() { }

  ngOnInit() {
  }

}
