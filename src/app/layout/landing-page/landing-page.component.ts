import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
  standalone: false
})
export class LandingPageComponent {
sliderImages = [
    'assets/slider/slide1.jpg',
    'assets/slider/slide2.jpg',
    'assets/slider/slide3.jpg'
  ];
  currentSlide = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.sliderImages.length;
    }, 2000); // 2 seconds
  }
}
