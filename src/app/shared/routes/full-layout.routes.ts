import { Routes } from '@angular/router';

export const FULL_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../../pages/full-pages/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }
];
