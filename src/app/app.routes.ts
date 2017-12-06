// ====== ./app/app.routes.ts ======

// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasePageComponent } from 'app/components-page/base-page/base-page.component';
import { HomepageComponent } from './components-page/homepage/homepage.component';

// Route Configuration
export const appRoutes: Routes = [
  { path: '', component: BasePageComponent, 
  children: [
    { path: '', component: HomepageComponent },
  ]
  }
];
// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
