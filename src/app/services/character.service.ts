import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Character} from '../character/character';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>('/api/v1/characters')
      .pipe(map(data => {
        if (data === null) {
          return [];
        }
        return data.map((character: Character) => character);
      }));
  }
}
