import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyContentWelcomeComponent } from './body-content-welcome.component';

describe('BodyContentWelcomeComponent', () => {
  let component: BodyContentWelcomeComponent;
  let fixture: ComponentFixture<BodyContentWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyContentWelcomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyContentWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
