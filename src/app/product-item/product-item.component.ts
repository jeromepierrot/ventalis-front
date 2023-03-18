import { Component, Input, OnInit } from '@angular/core';
import { Product } from "../models/products";

@Component({
  selector: 'vtl-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem!: Product;

  public viewAsProductList!: boolean;
  public pictureUrl!: string;

  constructor() {
  }

  ngOnInit(): void {
    this.viewAsProductList = true;
    this.pictureUrl = this.productItem.picture;
    this.pictureUrl = "https://fastly.picsum.photos/id/18/2500/1667.jpg?hmac=JR0Z_jRs9rssQHZJ4b7xKF82kOj8-4Ackq75D_9Wmz8";
  }

  onViewProduct() {
    this.viewAsProductList = !this.viewAsProductList;
  }
}
