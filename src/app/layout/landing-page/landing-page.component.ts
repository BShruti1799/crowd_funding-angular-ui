import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],  // fixed typo here
  standalone: false
})

export class LandingPageComponent implements OnInit {

  backgroundImages = [
    'assets/slider/logo1.jpg',
    'assets/slider/logo2.jpg',
    'assets/slider/logo3.jpg'
  ];

  currentBgIndex = 0;
  currentBackground = this.backgroundImages[0];





  testimonials = [
    {
      quote: "This service transformed our business! The team was incredibly responsive and the results exceeded all expectations. Highly recommend!",
      name: "Emma Johnson",
      role: "CEO, BrightFuture Inc.",
      photo: "assets/slider/download.jpg"
    },
    {
      quote: "I was amazed by the professionalism and attention to detail. They truly care about their clients and deliver outstanding results every time.",
      name: "James Smith",
      role: "Marketing Director, CreativeWave",
      photo: "assets/slider/download.jpg"
    },
    {
      quote: "Exceptional experience from start to finish. The team’s expertise helped us streamline operations and boost revenue within months.",
      name: "Sophia Lee",
      role: "Operations Manager, TechSolutions",
      photo: "assets/slider/download.jpg"
    },
    {
      quote: "Professional, reliable, and results-driven! Their support and knowledge made all the difference for our project.",
      name: "Michael Brown",
      role: "Product Manager, InnovateX",
      photo: "assets/slider/download.jpg"
    },
    {
      quote: "The collaboration was seamless, and the results speak for themselves. I highly recommend this team to anyone looking for quality and dedication.",
      name: "Linda Davis",
      role: "Founder, Bright Ideas",
      photo: "assets/slider/download.jpg"
    }
  ];

  // In your component.ts
  cards = [
    {
      icon: '🌟',
      title: 'Stunning Features',
      text: 'Explore powerful, intuitive features designed to enhance your workflow and productivity.',
      button: 'Learn More'
    },
    {
      icon: '🚀',
      title: 'Fast Performance',
      text: 'Experience blazing fast speeds and smooth interactions for an unmatched user experience.',
      button: 'Get Started'
    },
    {
      icon: '💡',
      title: 'Creative Ideas',
      text: 'Innovative and creative solutions that bring your ideas to life in spectacular ways.',
      button: 'Discover'
    }
  ];


  currentIndex = 1;
  translateX = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.currentBgIndex = (this.currentBgIndex + 1) % this.backgroundImages.length;
      this.currentBackground = this.backgroundImages[this.currentBgIndex];
    }, 5000); // Change every 5 seconds

    this.updateSliderPosition();
  }

  next(): void {
    if (this.currentIndex < this.testimonials.length - 1) {
      this.currentIndex++;
      this.updateSliderPosition();
    }
  }

  prev(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateSliderPosition();
    }
  }

  updateSliderPosition(): void {
    const slideWidthPercent = 60;
    const gapPx = 20;
    const container = document.querySelector('.slider1test .slider-wrapper') as HTMLElement;
    if (!container) return;

    const containerWidth = container.offsetWidth;
    const slideWidthPx = containerWidth * (slideWidthPercent / 100);
    const totalSlideWidth = slideWidthPx + gapPx;

    this.translateX = -this.currentIndex * totalSlideWidth + (containerWidth / 2) - (slideWidthPx / 2);
  }

  @HostListener('window:resize')
  onResize() {
    this.updateSliderPosition();
  }
}
