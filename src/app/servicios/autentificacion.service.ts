import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { Usuario } from '../clases/Usuario';
import { Xardin } from '../clases/Xardin';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {
  ip = 'localhost';
  private urlLogeoUser = 'http://' + this.ip + ':3000/api/login';
  private urlGetUser = 'http://' + this.ip + ':3000/api/peticion';
  private urlRexistro = 'http://' + this.ip + ':3000/api/register';
  private urlGardado = 'http://' + this.ip + ':3000/api/gardar';
  usuario: Usuario;
  constructor(private http: HttpClient, private router: Router) {
  }
  logearUsuario(user) {
    return this.http.post<any>(this.urlLogeoUser, user);
  }
  recibirDatosUser(user) {
    return this.http.post<any>(this.urlGetUser, user);
  }
  registrar(user) {
    return this.http.post<any>(this.urlRexistro, user);
  }

  gardar(user) {
    return this.http.post<any>(this.urlGardado, user);
  }
  loggedIn() {
    return !!localStorage.getItem('token');
  }
  getToken() {
    return localStorage.getItem('token');
  }
  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/benvida']);
    this.usuario = new Usuario('', '', '', '', '', null);
  }
  setUsuario(mail: string, username: string, name: string, surname: string,
             rol: string, xardins: Array<Xardin>) {
    this.usuario = new Usuario(mail, username, name, surname, rol, xardins);
  }

  getUsuarioTest() {
    const usuarioTest = new Usuario('test@multixard.gal',
      'test',
      'test',
      'test test',
      'user',
      [{
        direccion: 'Calle de los colegios, 6, Dena, 36967, Pontevedra, Spain',
        nome: 'Colexio Dena',
        latitude: 42.45631310971515,
        lonxitude: -8.812494277954103
      }, {
        direccion: 'Paseo Praia Silgar, 44, Sanxenxo, Pontevedra, Spain',
        nome: 'Xardín Tritón',
        latitude: 42.40166312365917,
        lonxitude: -8.811480402946474
      },
      {
        direccion: 'Xil-Ganón, 24, Meaño, Pontevedra, Spain',
        nome: 'Casa',
        latitude: 42.45871744287056,
        lonxitude: -8.803653717041017
      }, {
        direccion: 'Calle de los colegios, 65, Dena, 36967, Pontevedra, Spain',
        nome: 'Colexio Dena',
        latitude: 42.45631310971515,
        lonxitude: -8.812494277954103
      }, {
        direccion: 'Paseo Praia Silgar, 45, Sanxenxo, Pontevedra, Spain',
        nome: 'Xardín Tritón',
        latitude: 42.40166312365917,
        lonxitude: -8.811480402946474
      },
      {
        direccion: 'Xil-Ganón, 245, Meaño, Pontevedra, Spain',
        nome: 'Casa',
        latitude: 42.45871744287056,
        lonxitude: -8.803653717041017
      }]);
    return usuarioTest;
  }
}
