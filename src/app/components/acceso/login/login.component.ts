import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import Swal from 'sweetalert2';

import { AuthService } from '../../../services/auth/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    usuario: '',
    password: ''
  };

  constructor(
    private router: Router,
    private authservice: AuthService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    localStorage.removeItem('token');
    
  }

  singin () {
    console.log("MODELO DE USUARIO.: "+JSON.stringify(this.user));
    console.log("DATOS DE USUARIO..: "+this.user.usuario);
    console.log("DATOS DE USUARIO..: "+this.user.password);
    /*
    localStorage.setItem('token',this.user.nombre);
    this.router.navigate(['/home']);*/


    this.authservice.singin(this.user).subscribe(
      res => {
        let msg = res.msg;
        var codmsg = res.usr;
        
        console.log("MENSAJE..: "+codmsg);
        console.log("RESPUESTA..: "+JSON.stringify(res));
        //localStorage.setItem('token',tok);
        //this.router.navigate(['/home']);

        if (codmsg == '1') {
          this.spinner.show();
          setTimeout(() => {
            this.spinner.hide();
          }, 5000);
          let tok = res.tk;
          console.log('TOKEN:::....',tok)
          //var personal = res.usuario;
          //var usuario = personal.username;
          //localStorage.setItem('User', usuario);
          localStorage.setItem('token', tok);
          Swal.fire({
            title: 'Bienvenido.',
            text: msg,
            timer: 1000
          })

          this.router.navigate(['/home']);
        }

        if (codmsg == '0') {
          Swal.fire({
            title: "Error !",
            text: msg,
            timer: 1000
          });

          console.log('VALOR ', msg)
        }
      },
      err =>{
        Swal.fire({
          title: "Error !",
          text:  'El Servicio no esta disponible. Intente mas tarde.!!',
          timer: 1000});
        this.router.navigate(['/']);
        console.log('error...')
        console.log("ERROR..: "+ JSON.stringify(err.status));
        if(err.status == '0'){
          //localStorage.setItem('User','ERROR');
          //localStorage.setItem('token','SIN TOKEN');
          Swal.fire({
            title: "Error !",
            text:  'El Servicio no esta disponible. Intente mas tarde.!!',
            timer: 1000});
          this.router.navigate(['/']);
          console.log('error...')
        }
      })

  }

}

