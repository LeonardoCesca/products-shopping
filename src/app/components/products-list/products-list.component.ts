import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';
import { HttpClient } from '@angular/common/http';
import { Products } from '../../services/products/products';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: {};
  message: string = 'Add to cart';

  constructor(
    public productsService: ProductsService,
    private http: HttpClient,) { }

  ngOnInit() {
    this.getDataProducts();
  }

  getProducts() {
    return this.http.get('http://localhost/products');
  }

  getDataProducts() {
    this.productsService.getProducts().subscribe(products => {
      this.products = products;
    });
  }
}
