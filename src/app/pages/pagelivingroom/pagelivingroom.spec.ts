import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagelivingroomComponent } from './pagelivingroom.component';

describe('Pagelivingroom', () => {
  let component: PagelivingroomComponent;
  let fixture: ComponentFixture<PagelivingroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagelivingroomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagelivingroomComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
