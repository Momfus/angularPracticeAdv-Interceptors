import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';

import { catchError, map } from "rxjs/operators";
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http: HttpClient
  ) { }


  obtenerUsuarios() {

    // Armar params
    let params = new HttpParams().append('page', '1'); // Se añade al params para enviarlo junto
    params = params.append('nombre', 'Momfus Arboleo');

    // Armar headers
    // const headers = new HttpHeaders({

    //   'token-usuario': 'ABC12309049asdasd' // Prueba de headers

    // });

    return this.http.get('https://reqres.in/api/user', { // Endpoint de prueba

      params, // Idem que params: params
      // headers

    }).pipe(
      map( (res:any) => res['data'] ),
      catchError(  this.manejarError ) // Por defecto le envia el error como argumento sino se usa una función flecha y se coloca como argumento
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
