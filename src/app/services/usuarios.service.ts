import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

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
    const headers = new HttpHeaders({

      'token-usuario': 'ABC12309049asdasd' // Prueba de headers

    });

    return this.http.get('https://reqres.in/api/user', { // Endpoint de prueba

      params, // Idem que params: params
      headers

    });

  }

}
