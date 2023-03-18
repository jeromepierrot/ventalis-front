import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'vtl-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit, OnDestroy {
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
