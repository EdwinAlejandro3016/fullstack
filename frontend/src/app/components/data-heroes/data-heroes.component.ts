import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-data-heroes',
  templateUrl: './data-heroes.component.html',
  styleUrls: ['./data-heroes.component.scss']
})
export class DataHeroesComponent implements OnInit {
  ELEMENT_DATA: Element[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  ];

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.ELEMENT_DATA;

  constructor() { }
  ngOnInit(): void {
  }
  addMore(){
    this.ELEMENT_DATA.push({position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'});
  }
}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


