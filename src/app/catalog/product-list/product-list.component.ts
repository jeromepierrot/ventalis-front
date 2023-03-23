import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Product } from "../../models/products";
import { ApiMproductsService } from "../../services/api-mproducts.service";

@Component({
  selector: 'vtl-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products$!: Observable<Product[]>;

  constructor(private apiProductsService: ApiMproductsService) { }

  ngOnInit(): void {
    this.products$ = this.apiProductsService.getProducts();
  }
}
