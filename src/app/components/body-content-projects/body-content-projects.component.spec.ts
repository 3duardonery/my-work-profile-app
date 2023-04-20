import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyContentProjectsComponent } from './body-content-projects.component';

describe('BodyContentProjectsComponent', () => {
  let component: BodyContentProjectsComponent;
  let fixture: ComponentFixture<BodyContentProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyContentProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyContentProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
