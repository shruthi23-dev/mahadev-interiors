import {
  Component,
  HostListener,
  Inject,
  PLATFORM_ID,
  AfterViewInit
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements AfterViewInit {

  kitchenIndex = 0;

  visibleSlides = 4;
  isBrowser = false;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      this.updateVisibleSlides();
    }
  }

  @HostListener('window:resize')
  onResize() {
    if (this.isBrowser) {
      this.updateVisibleSlides();
    }
  }

  updateVisibleSlides() {
    const w = window.innerWidth;

    if (w <= 576) this.visibleSlides = 1;
    else if (w <= 992) this.visibleSlides = 2;
    else if (w <= 1200) this.visibleSlides = 3;
    else this.visibleSlides = 4;
  }

  /* ---------- DATA ---------- */

  kitchenOriginal = [
    'assets/cupboards/wrk3.jpeg',
    'assets/cupboards/wrk6.jpeg',
    'assets/cupboards/KCB4.webp',
    'assets/cupboards/KCB5.webp',
    'assets/cupboards/KCB6.webp',
    'assets/cupboards/KCB7.webp',
    'assets/cupboards/KCB8.webp'
  ];


  /* ---------- KITCHEN (CIRCULAR) ---------- */

kitchenNext() {
  const max = this.kitchenOriginal.length - this.visibleSlides;

  if (this.kitchenIndex >= max) {
    this.kitchenIndex = 0;
  } else {
    this.kitchenIndex++;
  }
}

kitchenPrev() {
  const max = this.kitchenOriginal.length - this.visibleSlides;

  if (this.kitchenIndex <= 0) {
    this.kitchenIndex = max;
  } else {
    this.kitchenIndex--;
  }
}

kitchenTransform() {
  return `translateX(-${this.kitchenIndex * (100 / this.visibleSlides)}%)`;
}
}