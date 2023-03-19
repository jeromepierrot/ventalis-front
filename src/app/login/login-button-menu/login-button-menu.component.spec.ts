import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginButtonMenuComponent } from './login-button-menu.component';

describe('LoginButtonMenuComponent', () => {
  let component: LoginButtonMenuComponent;
  let fixture: ComponentFixture<LoginButtonMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginButtonMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginButtonMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
