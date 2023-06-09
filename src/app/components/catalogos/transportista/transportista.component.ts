import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'


import { TransportistaService } from 'src/app/services/catalogos/transportista.service'
import Swal from 'sweetalert2'
import { Transportista } from '../../model/Transportista'
import { NgxSpinnerService } from 'ngx-spinner'
import { DataTableDirective } from 'angular-datatables'
import { Subject } from 'rxjs'
import { LanguageApp } from '../../LanguageApp'


@Component({
  selector: 'app-transportista',
  templateUrl: './transportista.component.html',
  styleUrls: ['./transportista.component.css'],
})
export class TransportistaComponent implements OnInit, OnDestroy {
 // @ViewChild(DataTableDirective, { static: false })
 // dtElement: DataTableDirective | undefined
  
  [x: string]: any

  public transportista: Transportista | any;
  public trans: Transportista | any;
  //public language : LanguageApp;
 
  /**
   * Ordenamiento de tabla
   */
  dtOptions: DataTables.Settings = {};
  //dtTrigger = new Subject<any>();
  dtTrigger: Subject<any> = new Subject<any>();
  isDtInitialized: boolean = false
  
  constructor(
    private serviceTrans: TransportistaService,
    private router: Router,
    public form: FormBuilder,private spinner: NgxSpinnerService
  ) // ,
  {}

  ngOnInit(): void {
    this.getTranspostista();
    this.spinner.show();

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      scrollCollapse: true,
      destroy: true,
      scrollY: '50vh',
      language: LanguageApp.spanish_datatables
      
    }
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
      console.log(this.transportista)
      if (  this.transportista.codigo === '7' || this.transportista.codigo === '5'
         || this.transportista.codigo === '6' || this.transportista.codigo === '4' 
         || this.transportista.codigo === '3') {
        Swal.fire({
          title: 'Error !',
          text: this.transportista.mensaje,
          timer: 1000,
        })
        localStorage.removeItem('token')
        this.router.navigate(['/'])
      }

      if (this.transportista.ms.codigo === "1") {
        this.trans = this.transportista.listTransportista;
        this.spinner.hide();
        this.dtTrigger.next(null);
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

    console.log('Boton Editar.')

  }
  eliminarTrans(transportista: Transportista | any){

    console.log('Boton Eliminar.')

  }


  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
