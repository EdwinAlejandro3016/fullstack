import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit {
  tag: string = "";
  constructor(
    private charactersService:CharactersService
  ) { }

  ngOnInit(): void {
  }

  sendTag(){
    this.charactersService.findHero(this.tag);
  }

}
