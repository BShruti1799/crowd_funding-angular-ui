import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainComponent } from './main/main.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ FooterComponent, LandingPageComponent, MainComponent, TopNavComponent, LayoutComponent],
  imports: [
    CommonModule, RouterModule, RouterOutlet, FormsModule
  ],
  exports: [FooterComponent, LandingPageComponent, MainComponent, TopNavComponent, LayoutComponent]
})
export class LayoutModule { }
