import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    nombre:'',
    clave:''
  };

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    localStorage.removeItem('token');
  }

  singin () {
    console.log("DATOS DE USUARIO..: "+this.user.nombre);
    console.log("DATOS DE USUARIO..: "+this.user.clave);
    localStorage.setItem('token',this.user.nombre);
    this.router.navigate(['/home']);

    /*
    this.authservice.singin(this.user).subscribe(
      res=>{
        console.log("RESPUESTA..: "+res)
      },
      err =>{
        console.log("ERROR..: "+err)
      })
      */
  }

}
