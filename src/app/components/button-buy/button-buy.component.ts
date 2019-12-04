import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  @Output() onAddItemToCart = new EventEmitter<any>();
  @Output() onDecItemToCart = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  changeMessage() {
    this.toggle = !this.toggle;

    if(this.childMessage) {
      this.status = this.toggle ? this.title : "Remove from cart";
      this.title = this.childMessage;
    }
    this.actionAddOrDec();
  }

  actionAddOrDec() {
    if(this.toggle === false) {
      this.onAddItemToCart.emit();
    } else {
      this.onDecItemToCart.emit();
    }
  }

}
