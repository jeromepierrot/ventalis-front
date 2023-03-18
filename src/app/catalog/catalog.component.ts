import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vtl-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})

export class CatalogComponent implements OnInit {
  isTesting!: boolean;

  ngOnInit(): void {
    this.isTesting = true;
  }
}
