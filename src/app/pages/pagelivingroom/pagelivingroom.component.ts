import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { ContactComponent } from "../../shared/contact/contact.component";

@Component({
  selector: 'app-pagelivingroom',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, ContactComponent],
  templateUrl: './pagelivingroom.component.html',
  styleUrl: './pagelivingroom.component.css',
})
export class PagelivingroomComponent {
  activeSection: 'all' | 'sofas' | 'tvcabinets'  = 'all';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.activeSection = params['section'] || 'all';
    });
  }

  showAll() {
    this.activeSection = 'all';
  }
}
