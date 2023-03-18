import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntranetButtonMenuComponent } from './intranet-button-menu.component';

describe('LoggedEmployeeButtonMenuComponent', () => {
  let component: IntranetButtonMenuComponent;
  let fixture: ComponentFixture<IntranetButtonMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntranetButtonMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntranetButtonMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
