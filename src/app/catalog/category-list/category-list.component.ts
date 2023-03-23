import {Component, OnInit} from '@angular/core';
import { Category } from "../../models/categories";
import { Observable } from "rxjs";
import { ApiMproductsService } from "../../services/api-mproducts.service";
@Component({
  selector: 'vtl-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categories$!: Observable<Category[]>;

  constructor(private apiCategoryService: ApiMproductsService) {
  }

  ngOnInit(): void {
    this.categories$ = this.apiCategoryService.getCategories();
  }
}
