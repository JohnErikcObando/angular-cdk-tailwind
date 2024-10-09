import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  FullscreenOverlayContainer,
  OverlayContainer,
} from '@angular/cdk/overlay';

import { routes } from './app.routes';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { provide: OverlayContainer, useClass: FullscreenOverlayContainer },
    provideHttpClient(withInterceptorsFromDi()),
  ],
};
