import {
  Component,
  AfterViewInit,
  OnDestroy,
  Inject,
  PLATFORM_ID,
  ChangeDetectorRef
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements AfterViewInit, OnDestroy {

  slides: string[] = [
    'assets/tvunits/wrtv4.jpeg',
    'assets/wr/wrs2.jpeg',
    'assets/cupboards/wrk2.jpeg',
    'assets/sofas-dnt/sofa8.jpeg',
    'assets/wr/wrs3.jpeg',

  ];

  currentSlide = 0;
  direction: 1 | -1 = 1;   // 🔥 KEY
  timer: any;
  isBrowser = false;

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private cdr: ChangeDetectorRef
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;
    this.runSlider();
  }

  runSlider() {
    this.timer = setTimeout(() => {

      // 🔁 change direction at edges
      if (this.currentSlide === this.slides.length - 1) {
        this.direction = -1;
      } else if (this.currentSlide === 0) {
        this.direction = 1;
      }

      this.currentSlide += this.direction;

      this.cdr.detectChanges(); // force repaint (SSR-safe)

      this.runSlider();
    }, 1300);
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
}
