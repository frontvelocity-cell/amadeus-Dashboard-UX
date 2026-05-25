import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

// Merged Angular bootstrap configuration
// Using modern provideRouter instead of deprecated importProvidersFrom(RouterModule.forRoot())
// provideRouter is the recommended approach for standalone applications in Angular 14+
// Removed duplicate imports and consolidated to use the modern Angular standalone API
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));