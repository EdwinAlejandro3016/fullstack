import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http:HttpClient
  ) { }

  create(user:User){
      this.http.post(`http://127.0.0.1:5001/api/auth/register`,user).subscribe(res=>{
      console.log(res)
    });
  }
  getAll(){
     this.http.get<User[]>(`http://127.0.0.1:5001/api/users/all`)
  }

}
