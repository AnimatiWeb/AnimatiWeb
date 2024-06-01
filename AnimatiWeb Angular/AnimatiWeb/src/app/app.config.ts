import { ApplicationConfig } from '@angular/core';
<<<<<<< HEAD
import { provideRouter, withComponentInputBinding } from '@angular/router';

=======
import { provideRouter } from '@angular/router';
>>>>>>> developer
import { routes } from './app.routes';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptorService } from './services/auth/jwt-interceptor.service';
import { ErrorInterceptorService } from './services/auth/error-interceptor.service';

export const appConfig: ApplicationConfig = {
<<<<<<< HEAD
  providers: [provideRouter(routes, withComponentInputBinding())]
=======
  providers: [provideRouter(routes), 
    {provide:HTTP_INTERCEPTORS, useClass:JwtInterceptorService,multi:true},
    {provide:HTTP_INTERCEPTORS, useClass:ErrorInterceptorService,multi:true},
  ]

>>>>>>> developer
};
