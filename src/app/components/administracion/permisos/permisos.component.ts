import { Component, OnInit } from '@angular/core';

interface Usuarios {
  value: string;
  viewValue: string;
}

interface roles {
  nombre: string;
  checked: boolean;
}

@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.css']
})
export class PermisosComponent implements OnInit {

  selectedValue?: string;

  permisos: roles[] = [];

  usuarios: Usuarios[] = [
    { value: 'Alfonso', viewValue: 'poncho' },
    { value: 'Hernan', viewValue: 'chino' },
    { value: 'Mynor', viewValue: 'neymynor' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onChange(newValue: any) {
    console.log(newValue);
    if (newValue === 'Alfonso') {
      this.permisos = [
        { nombre: "Vista #1", checked: false },
        { nombre: "Vista #2 Procesos", checked: false },
        { nombre: "Vista #3", checked: false },
        { nombre: "Vista #4", checked: false },
        { nombre: "Vista #5", checked: false },
        { nombre: "Vista #6", checked: false },
        { nombre: "Vista #7", checked: false }
      ];
    }
    if (newValue === 'Hernan') {
      this.permisos = [
        { nombre: "Vista #1", checked: true },
        { nombre: "Vista #2 Procesos", checked: false },
        { nombre: "Vista #3", checked: false },
        { nombre: "Vista #4", checked: false },
        { nombre: "Vista #5", checked: false },
        { nombre: "Vista #6", checked: false },
        { nombre: "Vista #7", checked: false }
      ];
    }
    if (newValue === '') {
      this.permisos = [];
    }
  }

  save() {
    console.log("PERMISOS Actualizados..: " + JSON.stringify(this.permisos));
  }



}
