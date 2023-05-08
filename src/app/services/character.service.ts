import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Character} from '../character/character';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {AppConfig} from '../app-config';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private readonly backendUrl;
  constructor(private http: HttpClient) {
    this.backendUrl = AppConfig.props.backend.url;
  }

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.backendUrl + '/api/v1/characters')
      .pipe(map(data => {
        if (data === null) {
          return [];
        }
        return data.map((character: Character) => character);
      }));
  }
}
