import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageKitchenComponent } from './pagekitchen.component';

describe('Kitchen', () => {
  let component: PageKitchenComponent;
  let fixture: ComponentFixture<PageKitchenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageKitchenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageKitchenComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
