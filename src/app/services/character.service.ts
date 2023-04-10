import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Character} from '../character/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private characters: Character[] = [
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

  constructor() { }

  getCharacters(): Observable<Character[]> {
    return of(this.characters);
  }
}