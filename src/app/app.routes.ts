import { Routes } from '@angular/router';
import { LandingPageComponent } from './layout/landing-page/landing-page.component';
import { AboutUsComponent } from './layout/about-us/about-us.component';


export const routes: Routes = [
    {
        path: '', component: LandingPageComponent
    },
    {
        path:'about-us',component:AboutUsComponent
    }
];
