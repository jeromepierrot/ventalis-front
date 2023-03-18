import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'vtl-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  isTesting!: boolean;

  ngOnInit(): void {
    this.isTesting = false;
  }
}


