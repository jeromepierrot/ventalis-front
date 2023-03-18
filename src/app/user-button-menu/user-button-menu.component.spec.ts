import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserButtonMenuComponent } from './user-button-menu.component';

describe('LoggedUserButtonMenuComponent', () => {
  let component: UserButtonMenuComponent;
  let fixture: ComponentFixture<UserButtonMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserButtonMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserButtonMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
