import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Heroe } from '../models/heroe.model';
import { Result } from '../models/result.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private heroes = new BehaviorSubject<Heroe[]>([]);
  private result = new BehaviorSubject<{}>({});

  heroes$ = this.heroes.asObservable();
  result$ = this.result.asObservable();

  //heroes guardados desde la base de datos
 //hacer el tipado de como vienen los heroes

  constructor(
    private http:HttpClient
  ) { }

  //falta colocar la instancia
  findHero(tag: string){
    const res = this.http.get<Result>(`http://127.0.0.1:4200/api/heroes/find/${tag}`).subscribe(res=> {
      this.result.next(res)
      console.log(res)
    });
  }
  //traer heroes

  //eliminar heroe

  //llenar heroes de la base de datos
}
