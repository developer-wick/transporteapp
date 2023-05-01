import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:8080';

  constructor( 
    private http:HttpClient,
    private router:Router
    ) { }

  singin (user:any) {
    return this.http.post<any>(this.URL+'/singin',user);
  }

  loggedIn () {
    return !!localStorage.getItem('token');
  }
  
}
