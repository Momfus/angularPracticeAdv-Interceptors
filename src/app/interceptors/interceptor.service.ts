// Un interceptor es un servicio agrega contenido a cada petición realizada

import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(

  ) { }

  // Atrapan los pedidos y agrega lo que se indica en el método
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Armar headers inyectado en cada petición http
    const headers = new HttpHeaders({
      'token-usuario': 'ABC12309049asdasd' // Prueba de headers
    });

    // se usa otra req, porque la del interceptor es la que se manipula (puede ser cualquier nombre)
    const reqClone = req.clone({ // El clone copia el formato del req.
      headers
    });

    return next.handle(reqClone)
      .pipe( // Se usa un pipe y no subscribe porque evitaria que se subscriban de otro lado
        catchError( this.manejarError )
      );

  }


  manejarError( error: HttpErrorResponse ) {

    console.log('Sucedio un error');
    console.log('Registrado en el log file');
    console.warn(error);

    return throwError( () =>{ // Se puede manejar desde donde se llama el servicio (y este no aparecería)
      return 'Error personalizado';
    });
  }

}
