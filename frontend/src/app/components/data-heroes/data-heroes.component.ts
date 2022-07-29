import { Component, OnInit,ViewChild } from '@angular/core';
import { Heroe } from 'src/app/models/heroe.model';
import { MatTable } from '@angular/material/table';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-data-heroes',
  templateUrl: './data-heroes.component.html',
  styleUrls: ['./data-heroes.component.scss']
})
export class DataHeroesComponent implements OnInit {
  heroes: Heroe[] = [];
    displayedColumns = ['image', 'description','actions'];
  dataSource = this.heroes;

  @ViewChild(MatTable) table!: MatTable<any>

  constructor(
    private charactersService:CharactersService
  ) { }
  ngOnInit(): void {
    this.charactersService.heroes$.subscribe((data)=> {
          this.heroes = data;
          if(data.length > 0){
            this.table.renderRows();
          }
    })
  }
  deleteHero(id:string){
    this.charactersService.deleteHero(id);
  }
}


