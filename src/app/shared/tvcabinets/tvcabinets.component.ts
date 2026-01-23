import {
  Component,
  OnInit,
  HostListener,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tvcabinets',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './tvcabinets.component.html',
  styleUrls: ['./tvcabinets.component.css']
})
export class TvcabinetsComponent implements OnInit {

  isBrowser = false;
  visibleCount = 4;

  originalSlides = [
     'assets/tvunits/wrtv7.jpeg',
    'assets/tvunits/wrtv12.jpeg',
    'assets/tvunits/wrtv9.jpeg',
    'assets/tvunits/wrtv10.jpeg',
    'assets/tvunits/wrtv11.jpeg',
    'assets/tvunits/TVC1.webp',
    'assets/tvunits/TVC2.webp',
    'assets/tvunits/TVC4.webp',
    'assets/tvunits/TVC5.webp'
  ];

  slides: string[] = [];
  index = 0;
  transition = true;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.setVisibleCount();
      this.buildSlides();
    }
  }

  /* 🔁 UPDATE ON RESIZE */
  @HostListener('window:resize')
  setVisibleCount() {
    const width = window.innerWidth;

    if (width <= 576) {
      this.visibleCount = 1;
    } else if (width <= 992) {
      this.visibleCount = 2;
    } else if (width <= 1200) {
      this.visibleCount = 3;
    } else {
      this.visibleCount = 4;
    }
  }

  buildSlides() {
    this.slides = [
      ...this.originalSlides.slice(-this.visibleCount),
      ...this.originalSlides,
      ...this.originalSlides.slice(0, this.visibleCount)
    ];

    this.index = this.visibleCount;
  }

  /* ➡️ NEXT */
  next() {
    this.transition = true;
    this.index++;
  }

  /* ⬅️ PREV */
  prev() {
    this.transition = true;
    this.index--;
  }

  /* 🔄 LOOP FIX */
  onTransitionEnd() {
    if (this.index >= this.originalSlides.length + this.visibleCount) {
      this.transition = false;
      this.index = this.visibleCount;
    }

    if (this.index < this.visibleCount) {
      this.transition = false;
      this.index =
        this.originalSlides.length + this.visibleCount - 1;
    }
  }

  getTransform() {
    return `translateX(-${this.index * (100 / this.visibleCount)}%)`;
  }
}
