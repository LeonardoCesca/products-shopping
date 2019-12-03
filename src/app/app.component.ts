import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'db-test';

  constructor(private router: Router) {}

  ngOnInit() {}

  isCartRoute() {
    return this.router.url === '/cart-list';
  }
}
