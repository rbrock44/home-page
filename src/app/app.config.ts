import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter, TitleStrategy } from '@angular/router';
import { routes } from './app.routes';
import { SettingsService } from './services/settings.service';
import { PageMetaStrategy } from './services/page-meta.strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withXhr(), withInterceptorsFromDi()),
    provideClientHydration(withEventReplay()),
    SettingsService,
    { provide: TitleStrategy, useClass: PageMetaStrategy },
  ],
};
