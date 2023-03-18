import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vtl-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  loaded!: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.loaded = true;
  }

  ngOnDestroy(): void {
    this.loaded = false;
  }


}
