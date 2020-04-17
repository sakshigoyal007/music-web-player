import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrytwoComponent } from './countrytwo.component';

describe('CountrytwoComponent', () => {
  let component: CountrytwoComponent;
  let fixture: ComponentFixture<CountrytwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrytwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrytwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
