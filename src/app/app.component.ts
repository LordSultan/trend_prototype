// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { TransportationService } from './transportation.service';
import { Component,Renderer2, input, output, inject } from '@angular/core';
import { RouterOutlet, RouterModule,  Router, NavigationEnd, ActivatedRoute } from '@angular/router';
// import { CarModule } from './car/car.module';
// import { HousingLocationComponent } from './housing-location/housing-location.component';
// import { EventEmitter } from 'stream';
// import { HousingLocation } from './housing-location/housinglocation';
import {CommonModule} from '@angular/common';
// import { HousingService } from './housing-location/housing.service';
import { NgModule } from '@angular/core';
import { ProfileComponent } from "./profile/profile.component";
// import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module'; // Ensure this import is correct
// import { SettingsComponent } from '../settings/settings.component'; // Ensure this import is correct



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],


  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'trend_prototype';

  backgroundcolor = 'blue'
  showHeader = true;
  constructor(private router: Router, private renderer: Renderer2){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Update the showHeader property based on the current route
        // this.showHeader = !['/settings'].includes(event.urlAfterRedirects);
        const hiddenRoutes = [ '/profile', '/about'];
        this.showHeader = !hiddenRoutes.some(route => event.urlAfterRedirects.includes(route));

       if (event.urlAfterRedirects.includes('/profile')) {
        this.backgroundcolor = '#1E1F21'; // Dark background
          this.renderer.setStyle(document.body, 'background-color', this.backgroundcolor);
          console.log(this.backgroundcolor);

        } else {
          // this.backgroundcolor = ''; // Default background
          this.renderer.removeStyle(document.body, 'background-color');

          console.log(this.backgroundcolor);

        }

        // const currentRoute = this.getChildRoute(this.activatedRoute);
        // if (currentRoute && currentRoute.component) {
        //   console.log('Navigated to component:', currentRoute.component);

        //   // If the component has properties, you can access them like this:
        //   const componentInstance = currentRoute.component as any;
        //   console.log('Component properties:', componentInstance.someProperty);
        // }

      }
    });
  }


  private getChildRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }
}

