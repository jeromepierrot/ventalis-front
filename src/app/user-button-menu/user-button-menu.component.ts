import { Component } from '@angular/core';

@Component({
  selector: 'vtl-user-button-menu',
  templateUrl: './user-button-menu.component.html',
  styleUrls: ['./user-button-menu.component.scss']
})
export class UserButtonMenuComponent {
  /**
   * Options to show/hide items in the navbar menu
   */
  public hideSupportMenuItem: boolean = true;
  public hideShortcutMenuItems: boolean = true;

  ///// FOR TESTING Purposes ///// TODO: to be removed when auhtentification is set or mocks up */
  public hasRoleUser: boolean = true;
  public hasRoleEmployee: boolean = false;
  public hasRoleAdmin: boolean = false;
  ///// END OF TEST PART /////

}
