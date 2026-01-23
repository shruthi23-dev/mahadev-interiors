import {
  Component,
  HostListener,
  ElementRef,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isMenuOpen = false;
  activeMenu = '';   // ✅ ADD THIS
  isBrowser = false;
  isSticky = false;

  constructor(
    private el: ElementRef,
    private router: Router,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);

    // Close menu on route change
    this.router.events.subscribe(() => {
      this.isMenuOpen = false;
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.activeMenu = '';
  }

  // ✅ CONTACT CLICK HANDLER
  goToContact() {
    this.activeMenu = 'contact';
    this.isMenuOpen = false;

    this.router.navigate(['/home']).then(() => {
      if (!this.isBrowser) return;

      setTimeout(() => {
        const el = document.getElementById('contact-section');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    });
  }

  // Close menu when clicking outside
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const clickedInside = this.el.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.isMenuOpen = false;
    }
  }

  @HostListener('window:scroll', [])
onWindowScroll() {
  if (!this.isBrowser) return;

  this.isSticky = window.scrollY > 120;
}

}
