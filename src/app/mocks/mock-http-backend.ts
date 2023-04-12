import {HttpBackend, HttpEvent, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Character} from '../character/character';
import {CHARACTERS} from './characters';

export class MockHttpBackend implements HttpBackend {

  private readonly GET_CHARACTERS_URL = '/api/v1/characters';

  handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    if (req.url === this.GET_CHARACTERS_URL && req.method === 'GET') {
      return this.getCharacters();
    }
  }

  private getCharacters(): Observable<HttpResponse<Character[]>> {
    return new Observable<HttpResponse<Character[]>>(observer => {
      observer.next(new HttpResponse<Character[]>({
        status: 200,
        body: CHARACTERS
      }));

      observer.complete();
    });
  }
}
