import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { SettingsService } from './services/settings.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withXhr(), withInterceptorsFromDi()),
    provideClientHydration(withEventReplay()),
    SettingsService,
  ],
};
