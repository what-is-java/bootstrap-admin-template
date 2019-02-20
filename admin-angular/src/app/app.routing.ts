import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './page/home/home.component';
import { UserComponent } from './page/user/user.component';

const appRoutes: Routes = [{
    path: 'home',
    component: HomeComponent
  }, {
    path: 'user',
    component: UserComponent
  }, {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);