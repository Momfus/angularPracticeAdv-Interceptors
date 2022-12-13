import { Component } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(

    private usuarioService: UsuariosService

  ){

    this.usuarioService.obtenerUsuarios()
      .subscribe( res => {

        console.log(res);

      }, (err) => {

        console.log('Error en el appComponent');
        console.error(err);


      });

  }

}
