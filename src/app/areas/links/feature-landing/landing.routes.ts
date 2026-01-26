import { Routes } from '@angular/router';
import { Home } from './internal/home';
import { HomePage } from './internal/pages/home';
import { AddPage } from './internal/pages/add';
export const linksFeature: Routes = [
  {
    path: '',
    component: Home,
    children: [
      {
        path: '',
        component: HomePage,
      },
      {
        path: 'add',
        component: AddPage,
      },
    ],
  },
];
