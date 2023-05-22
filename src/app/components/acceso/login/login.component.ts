import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import Swal from 'sweetalert2';

import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    username:'',
    passwd:''
  };

  constructor(
    private router:Router,
    private authservice:AuthService
  ) { }

  ngOnInit(): void {
    localStorage.removeItem('token');
  }

  singin () {
    console.log("MODELO DE USUARIO.: "+JSON.stringify(this.user));
    console.log("DATOS DE USUARIO..: "+this.user.username);
    console.log("DATOS DE USUARIO..: "+this.user.passwd);
    /*
    localStorage.setItem('token',this.user.nombre);
    this.router.navigate(['/home']);*/

    
    this.authservice.singin(this.user).subscribe(
      res=>{
        let msg = res.ms;
        var codmsg = msg.codmsg;
        
        console.log("MENSAJE..: "+codmsg);
        console.log("RESPUESTA..: "+JSON.stringify(res));
        //localStorage.setItem('token',tok);
        //this.router.navigate(['/home']);
        
        if(codmsg == '1'){
         
          let tok = res.jwt;
          var personal = res.usuario;
          var usuario = personal.username; 
          localStorage.setItem('User',usuario);
          localStorage.setItem('token',tok);
          Swal.fire({
            title: 'Bienvenido.',
            text: msg.mensjae,
            timer:1000
          })        

          this.router.navigate(['/home']);
        }
        
        if(codmsg == '0'){
          Swal.fire({
          title: "Error !",
          text:  msg.mensaje,
          timer: 1000});

          console.log('VALOR ', msg.mensaje)
        }
      },
      err =>{
        console.log("ERROR..: "+ JSON.stringify(err.status));
        if(err.status == '0'){
          //localStorage.setItem('User','ERROR');
          //localStorage.setItem('token','SIN TOKEN');
          this.router.navigate(['/']);
          console.log('error...')
        }
      })
      
  }

}

