import { Routes } from '@angular/router';

export const CONTENT_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('../../pages/content-pages/content-pages.module').then(m => m.ContentPagesModule),
  }
];
