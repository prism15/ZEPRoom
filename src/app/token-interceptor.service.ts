import { Injectable  ,Injector} from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor( private injector : Injector ) { }
  //while implementing a interface we need to implement a method
  intercept(req,next){
    let loginService = this.injector.get(LoginService);
    let tokenizedRequest = req.clone({
      setHeaders : {
        Authorization : `Bearer ${loginService.getToken()}`//ES6 syntax to directly embed value of token as a string
      }
    })
    
    return next.handle(tokenizedRequest)
  }
}
