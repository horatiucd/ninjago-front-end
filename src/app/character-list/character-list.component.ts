import { Component, OnInit } from '@angular/core';
import {Character} from '../character/character';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters: Character[];

  constructor() { }

  ngOnInit(): void {
    this.characters = [
      {
        id: 1,
        name: 'Jay',
        type: 'Good',
        season: 1,
        favorite: true
      },
      {
        id: 2,
        name: 'Vanghelis',
        type: 'Evil',
        season: 13,
        favorite: false
      },
      {
        id: 3,
        name: 'Overlord',
        type: 'Evil',
        season: 2,
        favorite: false
      },
      {
        id: 4,
        name: 'Aspheera',
        type: 'Evil',
        season: 11,
        favorite: false
      },
      {
        id: 5,
        name: 'Kay',
        type: 'Good',
        season: 1,
        favorite: true
      }
    ];
  }

}
