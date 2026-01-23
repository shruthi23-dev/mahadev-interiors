import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvcabinetsComponent } from './tvcabinets.component';

describe('Tvcabinets', () => {
  let component: TvcabinetsComponent;
  let fixture: ComponentFixture<TvcabinetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvcabinetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvcabinetsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
