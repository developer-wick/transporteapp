import { Component, OnInit, ViewChild } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'


import { TransportistaService } from 'src/app/services/catalogos/transportista.service'
import Swal from 'sweetalert2'
import { Transportista } from '../../model/Transportista'

@Component({
  selector: 'app-transportista',
  templateUrl: './transportista.component.html',
  styleUrls: ['./transportista.component.css'],
})
export class TransportistaComponent implements OnInit {
  //@ViewChild(DataTableDirective, { static: false })
  
  [x: string]: any

  public transportista: Transportista | any;
  public trans: Transportista | any;
  //private transportista: Transportista = new Transportista();

  constructor(
    private serviceTrans: TransportistaService,
    private router: Router,
    public form: FormBuilder,
  ) // private spinner: NgxSpinnerService,
  {}

  ngOnInit(): void {
    this.getTranspostista();
    //console.log('Tansportusta:.....',this.serviceTrans.getTrans());
  }


  public formTrans = this.form.group({
    id :                [],
    nit:                ['', [Validators.required, Validators.minLength(5)]],
    dpi:                ['', [Validators.required, Validators.minLength(10)]],
    razon_social:       ['', [Validators.required, Validators.minLength(2)]],
    nombres:            ['', [Validators.required, Validators.minLength(2)]],
    apellidos:          ['', [Validators.required, Validators.minLength(2)]],
    direccion:          ['', [Validators.required, Validators.minLength(4)]],
    telefono_domiciliar:['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
    telefono_movil:     ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
    estado:             ['A', Validators.required],
    trans_usuario_crea: [5],
})


  getTranspostista() {
    this.serviceTrans.getTrans().subscribe((response) => {
      this.transportista = response
      
      if (this.transportista.codigo === '7') {
        Swal.fire({
          title: 'Error !',
          text: this.transportista.ms.mensaje,
          timer: 1000,
        })
        localStorage.removeItem('token')
        this.router.navigate(['/'])
      }

      if (this.transportista.ms.codigo === '1') {
        this.trans = this.transportista.listTransportista;
        console.log('Entro al if', this.transportista)
      } else {
        Swal.fire({
          title: 'Error !',
          text: this.transportista.ms.mensaje,
          timer: 1000,
        })
      }

      console.log(this.transportista)
    })
  }

  editarTransporte(transportista: Transportista | any){

  }
  eliminarTrans(transportista: Transportista | any){

  }
}
