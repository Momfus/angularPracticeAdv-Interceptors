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

    return this.http.get('https://reqres123abc.in/api/user', { // Endpoint de prueba

      params, // Idem que params: params
      // headers

    }).pipe(
      map( (res:any) => res['data'] )
    );

  }




}
