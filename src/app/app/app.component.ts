import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'vtl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  noFooter:boolean = false;

  title = 'ventalis-front';

  ngOnInit():void {
  }
}
