import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    let token = sessionStorage.getItem('token');
    console.log("After session storage");
    if (token) {
      const headers = req.headers.set('Authorization', token);
      authReq = req.clone({ headers });
      console.log(authReq);
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }

  }
}

