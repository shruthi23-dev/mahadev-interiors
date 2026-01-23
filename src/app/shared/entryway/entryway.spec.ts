import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrywayComponent } from './entryway.component';

describe('Entryway', () => {
  let component: EntrywayComponent;
  let fixture: ComponentFixture<EntrywayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntrywayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrywayComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
