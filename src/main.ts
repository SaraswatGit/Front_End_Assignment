import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as Sentry from "@sentry/angular-ivy";
import { BrowserTracing } from "@sentry/tracing";
import { AppModule } from './app/app.module';

Sentry.init({
  dsn: "https://cf307ea16dd94c02876e19557920d296@o4504824754929664.ingest.sentry.io/4504826029015040",
  integrations: [
    new BrowserTracing({
      tracePropagationTargets: ["localhost", "https://yourserver.io/api"],
      routingInstrumentation: Sentry.routingInstrumentation,
    }),
  ],
  release: 'Release16_03_2023',
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  //jnjn
  tracesSampleRate: 1.0,
});

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
