import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

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
    return this.http.post<any>(this.URL+'login',user);
  }

  loggedIn () {
    return !!localStorage.getItem('token');
  }

  getToken () {
    localStorage.getItem('token');
  }
  
}
