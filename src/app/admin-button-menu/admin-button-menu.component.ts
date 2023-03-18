import { Component } from '@angular/core';

@Component({
  selector: 'vtl-admin-button-menu',
  templateUrl: './admin-button-menu.component.html',
  styleUrls: ['./admin-button-menu.component.scss']
})
export class AdminButtonMenuComponent {
  /**
   * Options to show/hide items in the navbar menu
   */
  public hideSupportMenuItem: boolean = true;

  ///// FOR TESTING Purposes ///// TODO: to be removed when auhtentification is set or mocks up */
  public hasRoleUser: boolean = false;
  public hasRoleEmployee: boolean = false;
  public hasRoleAdmin: boolean = true;

  ///// END OF TEST PART /////
}
