import { Routes } from '@angular/router';
import { Home } from './internal/home';
import { HomePage } from './internal/pages/home';
import { RecordPage } from './internal/pages/record';
import { tasksStore } from './internal/stores/tasks';

export const lab1FeatureRoutes: Routes = [
  {
    path: '',
    providers: [tasksStore],
    component: Home,
    children: [
      {
        path: '',
        component: HomePage,
      },
      {
        path: 'recorder',
        component: RecordPage,
      },
    ],
  },
];
