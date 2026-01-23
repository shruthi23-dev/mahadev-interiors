import {
  Component,
  AfterViewInit,
  OnDestroy,
  Inject,
  PLATFORM_ID,
  ChangeDetectorRef
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-dinning',
  standalone:true,
  imports: [CommonModule,RouterModule],
  templateUrl: './dinning.component.html',
  styleUrl: './dinning.component.css',
})
export class DinningComponent implements AfterViewInit, OnDestroy {

  Dinnings = [
    'assets/sofas-dnt/dngt1.webp',
    'assets/sofas-dnt/dngt2.webp',
    'assets/sofas-dnt/dngt3.webp',
    'assets/sofas-dnt/dngt4.webp',
    'assets/sofas-dnt/dngt5.webp',
    'assets/sofas-dnt/dngt6.webp'
  ];

  currentIndex = 0;
  direction: 1 | -1 = 1;
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

      const step = 2;                     // 🔑 MOVE 2 SLIDES
      const maxIndex = this.Dinnings.length - 2;

      if (this.currentIndex >= maxIndex) {
        this.direction = -1;
      } else if (this.currentIndex <= 0) {
        this.direction = 1;
      }

      this.currentIndex += step * this.direction;

      // safety clamp (important)
      if (this.currentIndex > maxIndex) this.currentIndex = maxIndex;
      if (this.currentIndex < 0) this.currentIndex = 0;

      this.cdr.detectChanges();
      this.runSlider();

    }, 3000);
  }

  ngOnDestroy(): void {
    if (this.timer) clearTimeout(this.timer);
  }
}
