import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from './app.component';
import { InterceptorService } from './interceptors/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
      // Por cada interceptor, se puede si son varios meter en un modulo
      provide: HTTP_INTERCEPTORS, // Se define que es un interceptor el provider
      useClass: InterceptorService, // el interceptor creado
      multi: true // para estar pendiente de todas las intercepciones http
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
