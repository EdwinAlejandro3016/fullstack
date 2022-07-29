import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataHeroesComponent } from './data-heroes.component';

describe('DataHeroesComponent', () => {
  let component: DataHeroesComponent;
  let fixture: ComponentFixture<DataHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataHeroesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
