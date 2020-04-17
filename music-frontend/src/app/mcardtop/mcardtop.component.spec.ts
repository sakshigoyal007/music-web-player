import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McardtopComponent } from './mcardtop.component';

describe('McardtopComponent', () => {
  let component: McardtopComponent;
  let fixture: ComponentFixture<McardtopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McardtopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McardtopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
