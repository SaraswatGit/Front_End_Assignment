import { APP_INITIALIZER, ErrorHandler, NgModule } from "@angular/core";import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { FrontSearchingComponent } from './front-searching/front-searching.component';
import { PersonRepositoriesComponent } from './person-repositories/person-repositories.component';
import { SingleRepoComponent } from './single-repo/single-repo.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { LoadingComponent } from './loading-component/loading-component.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as Sentry from "@sentry/angular-ivy";
import { Router } from "@angular/router";
@NgModule({
  declarations: [
    AppComponent,
    FrontSearchingComponent,
    PersonRepositoriesComponent,
    SingleRepoComponent,
    PersonDetailsComponent,
    LoadingComponent,
    ErrorComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    FontAwesomeModule,
  ],
  providers: [     {
    provide: ErrorHandler,
    useValue: Sentry.createErrorHandler({
      showDialog: true,
    }),
  },
  {
    provide: Sentry.TraceService,
    deps: [Router],
  },
  {
    provide: APP_INITIALIZER,
    useFactory: () => () => {},
    deps: [Sentry.TraceService],
    multi: true,
  },],
  bootstrap: [AppComponent],
})
export class AppModule {}
