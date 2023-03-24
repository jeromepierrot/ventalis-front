import { Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'vtl-login',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit, OnDestroy {

  @Input() submit!: string;

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
