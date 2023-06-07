import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokeninterceptorService implements HttpInterceptor {

  constructor(private authservice: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const tk = localStorage.getItem('token');
    const tokenizeReq = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'Authorization': `${this.authservice.getToken()}`
        //'Authorization': tk
      }
    })
    console.log('REQUEST:....', tokenizeReq)
    //return next.handle(tokenizeReq);
    return next.handle(tokenizeReq)
      /*
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMsg = '';
          if (error.error instanceof ErrorEvent) {
            console.log('This is client side error');
            errorMsg = `Error: ${error.error.message}`;
          } else {
            console.log('ELSE This is server side error');
            errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
          }
          console.log(errorMsg);
          return throwError(errorMsg);
        })
      )
      */
  }


}


