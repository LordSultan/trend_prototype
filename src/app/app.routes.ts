import {RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { AboutTrendComponent } from './about-trend/about-trend.component';
import { GallaryComponent } from './gallary/gallary.component';
import { TrendServicesComponent } from './trend-services/trend-services.component';
import { NgModule } from '@angular/core';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
  {path: 'settings', component: SettingsComponent},
    { path: 'profile/:id', component: ProfileComponent, canActivate: [authGuard] },
    {path: 'login', component: LoginComponent},
    {path: 'about-trend', component: AboutTrendComponent},
    {path: 'gallary', component: GallaryComponent},
    {path: 'trend-services', component: TrendServicesComponent},
    { path: 'signup', component: SignupComponent }
  //   // { path: 'account', component: AccountComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Restores the scroll position
      anchorScrolling: 'enabled', // Enables anchor scrolling (optional)
      enableTracing: false, // Set to true for debugging purposes
    }),
  ],
  exports: [RouterModule],
    })
    export class AppRoutingModule {}
// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// // import { AccountComponent } from './account/account.component';
// import { ProfileComponent } from '../profile/profile.component';
// import { SettingsComponent } from '../settings/settings.component';
// // ... other imports ...

// const routes: Routes = [
//   {path: 'settings', component: SettingsComponent},
//   { path: 'profile', component: ProfileComponent },
//   // { path: 'account', component: AccountComponent },
//   // ... other routes ...
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
