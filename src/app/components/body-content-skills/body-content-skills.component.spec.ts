import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyContentSkillsComponent } from './body-content-skills.component';

describe('BodyContentSkillsComponent', () => {
  let component: BodyContentSkillsComponent;
  let fixture: ComponentFixture<BodyContentSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyContentSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyContentSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
