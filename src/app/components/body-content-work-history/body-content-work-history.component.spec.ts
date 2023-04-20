import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyContentWorkHistoryComponent } from './body-content-work-history.component';

describe('BodyContentWorkHistoryComponent', () => {
  let component: BodyContentWorkHistoryComponent;
  let fixture: ComponentFixture<BodyContentWorkHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyContentWorkHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyContentWorkHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
