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
  selector: 'app-cupboards',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './cupboards.component.html',
  styleUrls: ['./cupboards.component.css']
})
export class CupboardsComponent implements AfterViewInit {

  bedroomIndex = 0;
  bedIndex = 0;
  dressIndex = 0;

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

  bedroomOriginal = [
    'assets/cupboards/wrc5.jpeg',
    'assets/cupboards/wrc9.jpeg',
    'assets/cupboards/BDR2.jpg',
    'assets/cupboards/BDR3.webp',
    'assets/cupboards/wrc7.jpeg',
    'assets/cupboards/BDR5.webp',
    'assets/cupboards/BDR6.webp',
    'assets/cupboards/wrc15.jpeg',
    'assets/cupboards/BDR8.webp'
  ];

  bedOriginal = [
    'assets/wr/wrb1.jpeg',
    'assets/wr/wrb3.jpeg',
    'assets/cupboards/bed4.jpg',
    'assets/wr/wrb4.jpeg',
    'assets/cupboards/bed9.webp',
    'assets/cupboards/bed7.webp',
    'assets/cupboards/bed8.webp'
  ];
  dressOriginal = [
    'assets/cupboards/drt4.webp',
    'assets/cupboards/drt5.webp',
    'assets/wr/wrdt5.jpeg',
    'assets/cupboards/drt6.webp',
    'assets/cupboards/drt7.webp',
    'assets/wr/wrdt1.jpeg',
    'assets/cupboards/drt9.webp',

  ];

  /* ---------- BEDROOM (CIRCULAR) ---------- */

bedroomNext() {
  const max = this.bedroomOriginal.length - this.visibleSlides;

  if (this.bedroomIndex >= max) {
    this.bedroomIndex = 0;   // 🔁 instant loop
  } else {
    this.bedroomIndex++;
  }
}

bedroomPrev() {
  const max = this.bedroomOriginal.length - this.visibleSlides;

  if (this.bedroomIndex <= 0) {
    this.bedroomIndex = max;
  } else {
    this.bedroomIndex--;
  }
}

bedroomTransform() {
  return `translateX(-${this.bedroomIndex * (100 / this.visibleSlides)}%)`;
}

  /* ---------- Bed ---------- */

bedNext() {
  const max = this.bedOriginal.length - this.visibleSlides;

  if (this.bedIndex >= max) {
    this.bedIndex = 0;
  } else {
    this.bedIndex++;
  }
}

bedPrev() {
  const max = this.bedOriginal.length - this.visibleSlides;

  if (this.bedIndex <= 0) {
    this.bedIndex = max;
  } else {
    this.bedIndex--;
  }
}

bedTransform() {
  return `translateX(-${this.bedIndex * (100 / this.visibleSlides)}%)`;
}

/*-------Dressing table------*/
dressNext() {
  const max = this.dressOriginal.length - this.visibleSlides;

  if (this.dressIndex >= max) {
    this.dressIndex = 0;   // 🔁 instant loop
  } else {
    this.dressIndex++;
  }
}

dressPrev() {
  const max = this.dressOriginal.length - this.visibleSlides;

  if (this.dressIndex <= 0) {
    this.dressIndex = max;
  } else {
    this.dressIndex--;
  }
}

dressTransform() {
  return `translateX(-${this.dressIndex * (100 / this.visibleSlides)}%)`;
}

}