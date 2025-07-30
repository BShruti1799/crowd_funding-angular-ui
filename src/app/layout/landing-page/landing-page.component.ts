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


  currentSlide = 0;
  slides!: NodeListOf<Element>;


testimonials = [
  {
    quote: "MCDC gave me a platform to perform and grow. From local skits to cultural shows, I’ve found my voice and my stage. Forever grateful!",
    name: "Local Actor",
    role: "Theatre Performer",
    icon: "fas fa-theater-masks"
  },
  {
    quote: "The film on Phule changed my perspective. It was powerful, enlightening, and beautifully presented. Truly an eye-opener for educators like me.",
    name: "Educator",
    role: "Social Science Teacher",
    icon: "fas fa-chalkboard-teacher"
  },
  {
    quote: "We received free medicines and blessings through their rural camp. It brought relief to many families and showed real compassion.",
    name: "Villager",
    role: "Beneficiary from Outreach Program",
    icon: "fas fa-hand-holding-heart"
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

  ngAfterViewInit(): void {
    this.slides = document.querySelectorAll('.hero-slide');

    const showSlide = (index: number) => {
      this.slides.forEach((slide, i) => {
        (slide as HTMLElement).classList.toggle('active', i === index);
      });
    };

    const nextSlide = () => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      showSlide(this.currentSlide);
    };

    showSlide(0);
    setInterval(nextSlide, 4000);
  }

  handleDonateClick() {
    alert('Donate Now clicked! Redirect to donation page.');
    console.log('Donate Now clicked');
    // Optionally, navigate to donation page
  }
}
