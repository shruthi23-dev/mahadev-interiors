import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { ContactComponent } from "../../shared/contact/contact.component";
@Component({
  selector: 'app-bedroom',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, ContactComponent],
  templateUrl: './pagekitchen.component.html',
  styleUrls: ['./pagekitchen.component.css']
})
export class PageKitchenComponent  {

}
