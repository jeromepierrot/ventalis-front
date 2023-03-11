import { Component } from '@angular/core';

@Component({
  selector: 'vtl-intranet-button-menu',
  templateUrl: './intranet-button-menu.component.html',
  styleUrls: ['./intranet-button-menu.component.scss']
})
export class IntranetButtonMenuComponent {
  /**
   * Options to show/hide items in the navbar menu
   */
  hideSupportMenuItem: boolean = true; /* shortcut button to contact technical support (ie: to send an email to request password reset)*/
  hideShortcutMenuItems: boolean = true; /* shortcut button to create products and/or to create category */

  ///// FOR TESTING Purposes ///// TODO: to be removed when auhtentification is set or mocks up */
  public hasRoleUser: boolean = false;
  public hasRoleEmployee: boolean = true;
  public hasRoleAdmin: boolean = false;
  ///// END OF TEST PART /////

}
