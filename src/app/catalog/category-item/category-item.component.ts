import { Component, Input, OnInit } from '@angular/core';
import { Category } from "../../models/categories";

@Component({
  selector: 'vtl-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent implements OnInit {

 @Input() categoryItem!: Category;

  constructor() {
  }

  ngOnInit(): void {

  }
}
