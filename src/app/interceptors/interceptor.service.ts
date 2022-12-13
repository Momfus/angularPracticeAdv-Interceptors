// Un interceptor es un servicio agrega contenido a cada petición realizada

import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(

  ) { }

  // Atrapan los pedidos y agrega lo que se indica en el método
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('Paso por el interceptor');

    return next.handle(req);

  }

}
