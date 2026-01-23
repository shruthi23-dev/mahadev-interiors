import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SofasComponent } from './sofas.component';

describe('Sofas', () => {
  let component: SofasComponent;
  let fixture: ComponentFixture<SofasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SofasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SofasComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
