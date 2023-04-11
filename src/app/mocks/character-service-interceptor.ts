import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Character} from '../character/character';
import {CHARACTERS} from './characters';

@Injectable({
  providedIn: 'root'
})
export class CharacterServiceInterceptor implements HttpInterceptor {

  private readonly GET_CHARACTERS_URL = '/api/v1/characters';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url === this.GET_CHARACTERS_URL && req.method === 'GET') {
      return this.getCharacters();
    }
    return next.handle(req);
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
