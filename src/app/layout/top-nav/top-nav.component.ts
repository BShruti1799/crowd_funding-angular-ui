import { Component } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.css',
  standalone: false
})
export class TopNavComponent {
  menuOpen = false;
  selectedLanguage = 'en';

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  changeLanguage(event: any) {
    const lang = event.target.value;
    console.log("Language changed to:", lang);
    // Optionally: store language in localStorage or use a translation service
  }
}
