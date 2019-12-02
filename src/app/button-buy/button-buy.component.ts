import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-buy',
  templateUrl: './button-buy.component.html',
  styleUrls: ['./button-buy.component.scss']
})
export class ButtonBuyComponent implements OnInit {
  title: string = 'Remove to cart'
  toggle = true;
  status: string = 'Add to cart';

  @Input() childMessage: string;

  constructor() { }

  ngOnInit() {
  }

  changeMessage() {
    this.toggle = !this.toggle;

    if(this.childMessage) {
      this.title = this.childMessage;
      this.status = this.toggle ? this.title : "Remove from cart";
    }
  }

}
