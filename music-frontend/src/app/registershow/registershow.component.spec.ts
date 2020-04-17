import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistershowComponent } from './registershow.component';

describe('RegistershowComponent', () => {
  let component: RegistershowComponent;
  let fixture: ComponentFixture<RegistershowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistershowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistershowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
