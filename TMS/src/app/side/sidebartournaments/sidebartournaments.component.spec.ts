import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebartournamentsComponent } from './sidebartournaments.component';

describe('SidebartournamentsComponent', () => {
  let component: SidebartournamentsComponent;
  let fixture: ComponentFixture<SidebartournamentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebartournamentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebartournamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
