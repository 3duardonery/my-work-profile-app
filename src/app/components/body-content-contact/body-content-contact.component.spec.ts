import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyContentContactComponent } from './body-content-contact.component';

describe('BodyContentContactComponent', () => {
  let component: BodyContentContactComponent;
  let fixture: ComponentFixture<BodyContentContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyContentContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyContentContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
