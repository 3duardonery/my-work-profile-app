import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyContentTitleComponent } from './body-content-title.component';

describe('BodyContentTitleComponent', () => {
  let component: BodyContentTitleComponent;
  let fixture: ComponentFixture<BodyContentTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyContentTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyContentTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
