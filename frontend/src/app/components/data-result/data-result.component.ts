import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-data-result',
  templateUrl: './data-result.component.html',
  styleUrls: ['./data-result.component.scss']
})
export class DataResultComponent implements OnInit {
  data: {}[] = [
      {
          id_Api: 1009351,
          name: "Hulk",
          description: "Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets.",
          thumbnail: {
              path: "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0",
              extension: "jpg"
          },
          img: 'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_small.jpg'
      }
  ];
  displayedColumns = ['image','id_Api', 'name', 'description'];
  dataSource = this.data;

  @ViewChild(MatTable) table!: MatTable<any>

  constructor(
    private charactersService:CharactersService
  ) { }

  ngOnInit(): void {
    this.charactersService.result$.subscribe((data)=> {
        if(data.hasOwnProperty('name')){
          this.data = [data];
          this.table.renderRows();
        }
    })
  }

}


