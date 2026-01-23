import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurworksComponent } from './ourworks.component';

describe('Ourworks', () => {
  let component: OurworksComponent;
  let fixture: ComponentFixture<OurworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurworksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurworksComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
