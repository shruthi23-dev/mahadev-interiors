import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SofasComponent } from '../sofas/sofas.component';
import { TvcabinetsComponent } from '../tvcabinets/tvcabinets.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-living-room',
  standalone: true,
  imports: [
    CommonModule,
    SofasComponent,
    TvcabinetsComponent,
    RouterModule
  ],
  templateUrl: './living-room.component.html',
  styleUrls: ['./living-room.component.css']
})
export class LivingRoomComponent {}
