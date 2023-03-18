import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminButtonMenuComponent } from './admin-button-menu.component';

describe('LoggedAdminButtonMenuComponent', () => {
  let component: AdminButtonMenuComponent;
  let fixture: ComponentFixture<AdminButtonMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminButtonMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminButtonMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
