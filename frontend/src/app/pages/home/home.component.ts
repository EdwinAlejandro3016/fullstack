import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/models/heroe.model';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  heroes: Heroe[] = [];
  constructor(
    private charactersService:CharactersService
  ) { }

  ngOnInit(): void {
    this.charactersService.getAllmyHeroes();
    this.charactersService.heroes$.subscribe(data=> {
        this.heroes = data;

    })
  }

}
