import {Injectable, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Category } from "../models/categories";
import { Product } from "../models/products";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiMproductsService implements OnInit {

  productsUrl: string = "http://localhost:9081/catalog/products";
  categoriesUrl: string = "http://localhost:9081/catalog/categories";

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

  }

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(this.categoriesUrl);
  }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.productsUrl);
  }

  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(this.categoriesUrl + '/id' + '/' + id);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(this.productsUrl + '/id' + '/' + id);
  }
}
