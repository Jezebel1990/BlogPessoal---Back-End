import { UserLogin } from './../model/UserLogin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { environment } from 'src/environments/environment.prod';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('https://blogpessoaldabell.herokuapp.com/usuarios/logar', userLogin)

  }
  cadastrar(user: User): Observable<User>{
    return this.http.post<User>('https://blogpessoaldabell.herokuapp.com/usuarios/cadastrar', user)

    }
    logado(){
      let ok: boolean = false

      if(environment.token != ''){
        ok = true
      }
      return ok
    }
}

