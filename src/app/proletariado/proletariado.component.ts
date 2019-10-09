import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from 'src/app/servicios/autentificacion.service';

@Component({
  selector: 'app-proletariado',
  templateUrl: './proletariado.component.html',
  styleUrls: ['./proletariado.component.sass']
})
export class ProletariadoComponent implements OnInit {

  logeado = false;
  loginTrabData = {}

  constructor(private autentificacion: AutentificacionService) { }

  ngOnInit() {
  }

  logearTraballador() {
    this.autentificacion.logearTraballador(this.loginTrabData)
      .subscribe(
        res => {
          console.log(res)
          this.logeado=true
        },
        err => console.log(err)
      )
    console.log("Logeandose cos seguintes datos: " + this.loginTrabData)
  }
  pecharSesion() {
    this.logeado = false;
  }

}
