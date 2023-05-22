import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://159.89.53.199:8080/CatalogosTRS/api/';
  //private URL = 'http://localhost:8080';

  constructor( 
    private http:HttpClient,
    private router:Router
    ) { }

  singin (user:any) {
    //return this.http.post<any>(this.URL+'/singin',user);
    return this.http.post<any>(this.URL+'login',user).pipe(
      catchError( e => {
        if(e.status=400){
          console.log('error:.....', e.error.error);
          return throwError(e);
        }

      console.error(e);
    //  Swal.fire('Error al crear', e.error.error, 'error');
      return throwError(e);
    })
    )
  }

  loggedIn () {
    return !!localStorage.getItem('token');
  }

  getToken () {
    localStorage.getItem('token');
  }
  
}
