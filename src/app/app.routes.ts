import { Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {path: 'settings', component: SettingsComponent},
    { path: 'settings/profile/:id', component: ProfileComponent },
    {path: 'login', component: LoginComponent}
  //   // { path: 'account', component: AccountComponent },
];

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
