import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoatComponent } from './coat.component';

describe('CoatComponent', () => {
  let component: CoatComponent;
  let fixture: ComponentFixture<CoatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoatComponent]
    });
    fixture = TestBed.createComponent(CoatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
