import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Category } from "../models/categories";
import { Product } from "../models/products";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiMproductsService {

  productsUrl: string = "http://localhost:9081/catalog/products";
  categoriesUrl: string = "http://localhost:9081/catalog/categories";

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category>{
    let categoryList = new Subject<Category>();
    this.http.get<Category[]>(this.categoriesUrl).subscribe(
      data => {
        data.map(
          (category) => {
            categoryList.next(new Category(category));
          }
        )
      }
    )
    return categoryList.asObservable();
  }

  getProducts(): Observable<Product>{
    let productList = new Subject<Product>();
    this.http.get<Product[]>(this.productsUrl).subscribe(
      data => {
        data.map(
          (product) => {
            productList.next(new Product(product));
          }
        )
      }
    )
    return productList.asObservable();
  }


  getCategoryById(id: number) {
    this.http.get<Category>(this.categoriesUrl + '/' + id).subscribe(
      data => {
        return data;
      });
  }

  getProductById(id: number) {
    this.http.get<Product>(this.productsUrl + '/' + id).subscribe(
      data => {
        return data;
      });
  }
}
