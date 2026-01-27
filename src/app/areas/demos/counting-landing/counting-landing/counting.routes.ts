import { Routes } from '@angular/router';
import { Home } from './internal/home';
import { HomePage } from './internal/pages/home';
import { OldSkoolPage } from './internal/pages/old-skool';
import { NewSkoolPage } from './internal/pages/new-skool';
import { CommunicationPage } from './internal/pages/communication';

export const countingFeatureRoutes: Routes = [
  {
    path: '',
    providers: [],
    component: Home,
    children: [
      {
        path: '',
        component: HomePage,
      },
      {
        path: 'old-skool',
        component: OldSkoolPage,
      },
      {
        path: 'new-skool',
        component: NewSkoolPage,
      },
      {
        path: 'communications',
        component: CommunicationPage,
      },
    ],
  },
];
