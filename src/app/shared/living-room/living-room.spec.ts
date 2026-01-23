import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingRoomComponent } from './living-room.component';

describe('LivingRoom', () => {
  let component: LivingRoomComponent;
  let fixture: ComponentFixture<LivingRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivingRoomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivingRoomComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
