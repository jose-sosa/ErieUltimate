import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebartourneyComponent } from './sidebartourney.component';

describe('SidebartourneyComponent', () => {
  let component: SidebartourneyComponent;
  let fixture: ComponentFixture<SidebartourneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebartourneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebartourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
