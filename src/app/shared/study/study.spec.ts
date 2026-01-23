import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyComponent } from './study.component';

describe('Study', () => {
  let component: StudyComponent;
  let fixture: ComponentFixture<StudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
