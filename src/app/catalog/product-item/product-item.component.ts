import { Component, Input, OnInit } from '@angular/core';
import { Product } from "../../models/products";
import { MatDialog } from "@angular/material/dialog";
//import { ProductItemDialogComponent } from "../product-item-dialog/product-item-dialog.component";

@Component({
  selector: 'vtl-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem!: Product;

  public viewAsProductList!: boolean;
  public pictureUrl!: string;
  public logged!: boolean;

  public toolTipMsg: string = "Veuillez vous connecter pour pouvoir commander cet article";

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.viewAsProductList = true;
    this.logged = false;
//    this.pictureUrl = this.productItem.picture;
//    this.pictureUrl = "https://fastly.picsum.photos/id/18/2500/1667.jpg?hmac=JR0Z_jRs9rssQHZJ4b7xKF82kOj8-4Ackq75D_9Wmz8";
    this.pictureUrl = "../../../assets/pictures/Logo-ventalis-green@4x.png";

    if(this.logged) {
      this.toolTipMsg = "";
    } else {
      this.toolTipMsg = "Veuillez vous connecter pour pouvoir commander cet article";
    }
  }

  onViewProduct() {
    this.viewAsProductList = !this.viewAsProductList;
  }

/*  openDialog() {
    /!* in progress*!/
    this.dialog.open(ProductItemDialogComponent, {
      width: '60%'
    });
  }*/
}
