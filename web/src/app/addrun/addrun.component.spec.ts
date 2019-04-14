import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrunComponent } from './addrun.component';

describe('AddrunComponent', () => {
  let component: AddrunComponent;
  let fixture: ComponentFixture<AddrunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
