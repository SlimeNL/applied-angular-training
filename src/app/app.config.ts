import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';

import { icons } from '@ht/shared/ui-common/icons/types';
import { authStore } from '@ht/shared/util-auth/store';
import { provideIcons } from '@ng-icons/core';
import { routes } from './app.routes';
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    authStore,
    provideIcons(icons),
  ],
};
