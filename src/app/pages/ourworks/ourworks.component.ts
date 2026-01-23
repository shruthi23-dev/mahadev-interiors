import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { ContactComponent } from "../../shared/contact/contact.component";

@Component({
  selector: 'app-ourworks',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, ContactComponent],
  templateUrl: './ourworks.component.html',
  styleUrl: './ourworks.component.css',
})
export class OurworksComponent {

}
