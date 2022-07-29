import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Heroe } from '../models/heroe.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private heroes = new BehaviorSubject<Heroe[]>([]);
  private result = new BehaviorSubject<Heroe>({
    name: '',
    description: '',
    thumbnail: {
      path: '',
      extension: ''
    },
    id_Api: ''
  });

  heroes$ = this.heroes.asObservable();
  result$ = this.result.asObservable();

  constructor(
    private http:HttpClient
  ) { }

  //buscar heroe por tag
  findHero(tag: string){
    const res = this.http.get<Heroe>(`http://127.0.0.1:4200/api/heroes/find/${tag}`).subscribe(res=> {
      this.result.next(res)
    });
  }
  //traer heroes guardados desde la base de datos
  getAllmyHeroes(){
    const res = this.http.get<Heroe[]>(`http://127.0.0.1:4200/api/heroes/all`).subscribe(res=> {
      this.heroes.next(res);
    });
  }
  //eliminar heroe
  deleteHero(id:string){
    const res = this.http.delete<Heroe>(`http://127.0.0.1:4200/api/heroes/delete/${id}`).subscribe(res=>console.log(res))
  }

  //agregar heroe de la base de datos
  addHero(hero:Heroe){
    const res = this.http.post<Heroe>('http://127.0.0.1:4200/api/heroes/add',{
      tag: hero
    }).subscribe(res=>console.log(res))
  }
}
