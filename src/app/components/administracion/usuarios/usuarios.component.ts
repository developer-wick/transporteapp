import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  user = {
    nombres:'',
    apellidos:'',
    dpi:'',
    telefono:''
  };

  constructor() { }

  ngOnInit(): void {
  }

  save () {
    console.log("DATOS DE USUARIO Nombres....: "+this.user.nombres);
    console.log("DATOS DE USUARIO Apellidos..: "+this.user.apellidos);
    
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
