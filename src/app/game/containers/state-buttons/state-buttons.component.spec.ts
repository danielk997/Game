import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateButtonsComponent } from './state-buttons.component';

describe('StateButtonsComponent', () => {
  let component: StateButtonsComponent;
  let fixture: ComponentFixture<StateButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
