import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vtl-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  isTesting!: boolean;

  ngOnInit(): void {
    this.isTesting = true;
  }

  onUpward() {
    // TODO: Fix upward button
    //this.router.navigateByUrl(this.router.url)

  }
}
