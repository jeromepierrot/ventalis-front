import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangButtonMenuComponent } from './lang-button-menu.component';

describe('LangButtonMenuComponent', () => {
  let component: LangButtonMenuComponent;
  let fixture: ComponentFixture<LangButtonMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LangButtonMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LangButtonMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
