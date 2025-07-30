import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutModule } from './layout/layout.module';

@Component({
  selector: 'app-root',
  imports: [LayoutModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'crowd_funding-angular-ui';

  themes = ['light', 'dark', 'blue', 'green', 'red'];

  setTheme(theme: string) {
    document.body.classList.remove(...this.themes.map(t => `${t}-theme`));
    document.body.classList.add(`${theme}-theme`);
  }
}
