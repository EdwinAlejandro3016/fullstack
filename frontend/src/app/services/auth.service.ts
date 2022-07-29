import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Auth } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string = '';

  constructor(
    private http:HttpClient,
  ) {
  }

  login(user:User){
     this.http.post<Auth>(`http://127.0.0.1:4200/api/auth/login`,user).subscribe(rta=>{
      localStorage.setItem('TOKEN',rta.access_token);
      this.token = rta.access_token;
    })
  }
  //proteger pagina profile
  profile(){
    let token;
    if(localStorage.getItem('TOKEN')){
      token = localStorage.getItem('TOKEN');
      console.log(token)
    }else{
      token = '';
    }

    this.http.get(`http://127.0.0.1:4200/api/auth/profile`,{headers: {
      autorizacion: `a${token}`
    }}).subscribe(res=>{
      if(res){
        console.log('siii')
      }else{
        console.log('nooo')
      }
    })
  }
}
