import { Component, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule],   // ✅ ADD THIS
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements AfterViewInit {

  images = [
    'assets/cupboards/wrc5.jpeg',
    'assets/cupboards/wrk3.jpeg',
    'assets/tvunits/wrtv4.jpeg',
    'assets/wr/wrb2.jpeg',
    'assets/wr/wrdt5.jpeg',
    'assets/tvunits/wrtv16.jpeg',
    'assets/wr/wrs3.jpeg',
    'assets/wr/wrs2.jpeg'
  ];

  showBlur=false;
  showLogo = false;

 constructor(private router: Router,private cdr: ChangeDetectorRef) {}

ngAfterViewInit(): void {
  setTimeout(() => {
    this.showBlur = true;
    this.showLogo = true;
    this.cdr.detectChanges();
    }, 2000); 

    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 4000); // 2s blur + 2s logo
}
}

