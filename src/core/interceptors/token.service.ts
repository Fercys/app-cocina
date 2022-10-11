import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';

@Injectable({ providedIn: 'root' })

export class TokenService implements HttpInterceptor {


  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token_kong = ''// environment.api_key;
    let sucursal = localStorage.getItem('Sucursal');
    let token_bear = localStorage.getItem('token_bear');
    let security = localStorage.getItem('security');

    // console.log(token_bear);
    // console.log(security);
    // console.log("SUCURSAL:  "+sucursal);

    //Obtenemos el Token
    const token: string = token_kong;
    let request = req;
    //Agregamos el content type si lo deseamos
    request = req.clone({ headers: request.headers.set('Content-Type', 'application/json') });
     //Verificamos que posea token
     if (token) {
       //Agregamos el token al header
      
       request = request.clone({ headers: request.headers.set('apikey',environment.url) });
       request = request.clone({ headers: request.headers.set('Sucursal',localStorage.getItem('Sucursal')+'') });
     }
    if(token_bear){
     request = request.clone({ headers: request.headers.set('Authorization', 'Bearer '+localStorage.getItem('token_bear')) });
     request = request.clone({ headers: request.headers.set('Security', localStorage.getItem('security')+'') });
    //  console.log(request);
     
    }
     //Se envía la petición y con el pipe catchError nos fijamos si la request nos tira error para redirigirlo en caso de que el token no exista o se haya vencido
     return next.handle(request).pipe(
       catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          this.router.navigate(['']);
         }
         return throwError( err );
       })
     );
  }
}