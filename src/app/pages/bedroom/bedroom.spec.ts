import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedroomComponent } from './bedroom.component';

describe('CupboardsPK', () => {
  let component: BedroomComponent;
  let fixture: ComponentFixture<BedroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BedroomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BedroomComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
