import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinningComponent } from './dinning.component';

describe('Dinning', () => {
  let component: DinningComponent;
  let fixture: ComponentFixture<DinningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DinningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DinningComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
