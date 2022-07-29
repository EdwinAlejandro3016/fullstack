import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Heroe } from 'src/app/models/heroe.model';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-data-result',
  templateUrl: './data-result.component.html',
  styleUrls: ['./data-result.component.scss']
})
export class DataResultComponent implements OnInit {
  data: Heroe[] = [];
  displayedColumns = ['image', 'description'];
  dataSource = this.data;

  @ViewChild(MatTable) table!: MatTable<any>

  constructor(
    private charactersService:CharactersService
  ) { }

  ngOnInit(): void {
    this.charactersService.result$.subscribe((data)=> {
      //valido para que no me agregue un item vacio
        if(data.name){
          this.data = [data];
          console.log(this.data)
          this.table.renderRows();
        }
    })
  }
  saveHero(){
    this.charactersService.addHero(this.data[0]);
  }
}


