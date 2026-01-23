import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeroComponent } from '../../shared/hero/hero.component';
import { CupboardsComponent } from '../../shared/cupboards/cupboards.component';
import { DinningComponent } from "../../shared/dinning/dinning.component";
import { LivingRoomComponent } from "../../shared/living-room/living-room.component";
import { KitchenComponent } from '../../shared/kitchen/kitchen.component';
import { ContactComponent } from "../../shared/contact/contact.component";
import { StudyComponent } from "../../shared/study/study.component";
import { EntrywayComponent } from "../../shared/entryway/entryway.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    CupboardsComponent,
    KitchenComponent,
    DinningComponent,
    LivingRoomComponent,
    ContactComponent,
    StudyComponent,
    EntrywayComponent
],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
