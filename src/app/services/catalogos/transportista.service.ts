import { HttpClient, HttpHeaders, JsonpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
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


  getTrans(): Observable<Object>{
    const end = `${url}/transportista`  
    /*   
    const end = `${url}/transportista`  
    const b =`Bearer ${localStorage.getItem('token')}` 
    const httpOptions = {
        headers: new HttpHeaders({ 'Authorization':`Bearer ${localStorage.getItem('token')}`, 'Content-Type': 'application/json' })
    }
*/
    //const headers = { 'content-type': 'application/json', 'Authorization': this.tk }
    //const requestOptions = { headers: headers };
   
    //let tkn = localStorage.getItem('token');

    //const headers = HttpHeaders({ 'Authorization': tkn, 'Content-Type': 'application/json' });
    //const headers = new HttpHeaders().set('content-type', 'application/json').set('Authorization', this.tk);
    //const header = new Headers();
   //header.append('Authorization': this.tk);
    //console.log('HEADERS', httpOptions)  
   // console.log('BARARER', b)  


   let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.tk });
    let options = { headers: headers };
    return this.http.get(`${url}/transportista`, options); 
  }

}
