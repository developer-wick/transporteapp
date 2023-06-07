import { HttpClient, HttpHeaders, JsonpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Transportista } from 'src/app/components/model/Transportista';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';

const url = environment.base_ulr;


@Injectable({
  providedIn: 'root'
})
export class TransportistaService {

  private  tk:any = localStorage.getItem('token');
  //private  headers = new HttpHeaders({ 'Authorization': this.tk, 'Content-Type': 'application/json' });
  constructor(private  http: HttpClient,private authservice: AuthService) { }


  getTrans(){
    let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.tk });
    let options = { headers: headers };

   // console.log('HEADERS',options, '  TOKEN:....', this.tk);
   // console.log('URL::::.....', `${url}/transportista`)
    return this.http.get(`${url}/transportista`, options)
    .pipe(
      catchError(e =>{
      console.log('ERROR:....' ,e);
      return e
    })); 
  }

}
