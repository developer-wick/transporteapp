import { transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { catchError, map } from 'rxjs';
import { TransportistaService } from 'src/app/services/catalogos/transportista.service';
import { environment } from 'src/environments/environment';
import { Transportista } from '../../model/Transportista';




@Component({
  selector: 'app-transportista',
  templateUrl: './transportista.component.html',
  styleUrls: ['./transportista.component.css']
})
export class TransportistaComponent implements OnInit {

  private transportista : Transportista | any;

  constructor(private serviceTrans: TransportistaService) { }

  ngOnInit(): void {
   this.getTranspostista()
   //console.log('Tansportusta:.....',this.serviceTrans.getTrans());
  }

  getTranspostista(){
    this.serviceTrans.getTrans().subscribe(response =>{
      console.log(response)
    })
    
  }

}
