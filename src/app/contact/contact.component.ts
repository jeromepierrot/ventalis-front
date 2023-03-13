import { Component } from '@angular/core';

@Component({
  selector: 'vtl-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  isTesting: boolean = true;

  onUpward() {
    // TODO: Fix upward button
    //this.router.navigateByUrl(this.router.url)

  }
}


