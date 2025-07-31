import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  standalone: false
})
export class LandingPageComponent implements AfterViewInit, OnDestroy {
  private scrollListener!: () => void;
  private timers: number[] = [];

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    // Smooth scrolling
    const anchors = this.el.nativeElement.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor: HTMLAnchorElement) => {
      this.renderer.listen(anchor, 'click', (e: Event) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        const target = this.el.nativeElement.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Mobile menu toggle
    const mobileMenuBtn = this.el.nativeElement.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
      this.renderer.listen(mobileMenuBtn, 'click', () => {
        console.log('Mobile menu clicked');
        // Add actual toggle logic here
      });
    }

    // Header scroll background effect
    this.scrollListener = this.renderer.listen(window, 'scroll', () => {
      const header = this.el.nativeElement.querySelector('.header');
      if (header) {
        const bgColor =
          window.scrollY > 100
            ? 'rgba(255, 255, 255, 0.98)'
            : 'rgba(255, 255, 255, 0.95)';
        this.renderer.setStyle(header, 'background', bgColor);
      }

      // Parallax scroll effect
      const parallax = this.el.nativeElement.querySelector('.statistics-section');
      if (parallax) {
        const speed = window.pageYOffset * 0.5;
        this.renderer.setStyle(parallax, 'transform', `translateY(${speed}px)`);
      }
    });

    // Form submit alert
    const contactForm = this.el.nativeElement.querySelector('form');
    if (contactForm) {
      this.renderer.listen(contactForm, 'submit', (e: Event) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
      });
    }

    // Amount button selection
    const amountButtons = this.el.nativeElement.querySelectorAll('.amount-btn');
    amountButtons.forEach((btn: HTMLElement) => {
      this.renderer.listen(btn, 'click', () => {
        amountButtons.forEach((b: HTMLElement) =>
          this.renderer.setStyle(b, 'background', 'var(--secondary)')
        );
        this.renderer.setStyle(btn, 'background', 'var(--secondary-hover)');
      });
    });

    // Animate on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.setStyle(entry.target, 'animationDelay', '0s');
          this.renderer.addClass(entry.target, 'animate-fade-in');

          // Stat number animation
          const numberElement:any = entry.target.querySelector('.stat-number');
          if (numberElement) {
            const raw = numberElement.textContent?.replace(/\D/g, '');
            const targetNumber = parseInt(raw || '0', 10);
            this.animateNumber(numberElement, targetNumber);
          }
        }
      });
    }, observerOptions);

    // Observe elements
    const animatables = this.el.nativeElement.querySelectorAll(
      '.card, .section-header, .cta-point, .stat-card'
    );
    animatables.forEach((el: HTMLElement) => {
      observer.observe(el);
    });

    // Mouse hover effect for stat cards
    const statCards = this.el.nativeElement.querySelectorAll('.stat-card');
    statCards.forEach((card: HTMLElement) => {
      this.renderer.listen(card, 'mousemove', (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = (y - rect.height / 2) / 10;
        const rotateY = (rect.width / 2 - x) / 10;

        this.renderer.setStyle(
          card,
          'transform',
          `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.05)`
        );
      });

      this.renderer.listen(card, 'mouseleave', () => {
        this.renderer.setStyle(
          card,
          'transform',
          'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)'
        );
      });

      this.renderer.listen(card, 'keydown', (e: KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.click();
        }
      });
    });
  }

  private animateNumber(element: HTMLElement, target: number): void {
    const duration = 2000;
    const interval = 16;
    const increment = target / (duration / interval);
    let current = 0;

    const timer = window.setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }

      const suffix = element.textContent?.includes('+') ? '+' : '';
      element.textContent = Math.floor(current).toString() + suffix;
    }, interval);

    this.timers.push(timer);
  }

  ngOnDestroy(): void {
    this.timers.forEach(timer => clearInterval(timer));
    this.timers = [];
    if (this.scrollListener) {
      this.scrollListener();
    }
  }
}
