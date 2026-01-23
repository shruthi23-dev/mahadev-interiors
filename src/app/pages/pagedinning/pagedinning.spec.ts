import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDinningComponent } from './pagedinning.component';

describe('Pagedinning', () => {
  let component: PageDinningComponent;
  let fixture: ComponentFixture<PageDinningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDinningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDinningComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
