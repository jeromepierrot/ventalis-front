import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntranetContentComponent } from './intranet-content.component';

describe('EmployeeContentComponent', () => {
  let component: IntranetContentComponent;
  let fixture: ComponentFixture<IntranetContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntranetContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntranetContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
