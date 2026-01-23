import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CupboardsComponent } from './cupboards.component';

describe('Cupboards', () => {
  let component: CupboardsComponent;
  let fixture: ComponentFixture<CupboardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CupboardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CupboardsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
