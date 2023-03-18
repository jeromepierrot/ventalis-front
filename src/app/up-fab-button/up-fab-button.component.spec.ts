import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpFabButtonComponent } from './up-fab-button.component';

describe('UpFabButtonComponent', () => {
  let component: UpFabButtonComponent;
  let fixture: ComponentFixture<UpFabButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpFabButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpFabButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
