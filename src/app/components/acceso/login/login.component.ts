import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
        let tok = res.jwt;
        var personal = res.usuario;
        var usuario = personal.username;
        console.log("MENSAJE..: "+codmsg);
        console.log("RESPUESTA..: "+JSON.stringify(res));
        //localStorage.setItem('token',tok);
        //this.router.navigate(['/home']);
        
        if(codmsg == '1'){
          localStorage.setItem('User',usuario);
          localStorage.setItem('token',tok);
          this.router.navigate(['/home']);
        }
        
      },
      err =>{
        console.log("ERROR..: "+ JSON.stringify(err.status));
        if(err.status == '0'){
          //localStorage.setItem('User','ERROR');
          //localStorage.setItem('token','SIN TOKEN');
          this.router.navigate(['/']);
        }
      })
      
  }

}
