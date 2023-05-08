import {Injectable} from '@angular/core';
import {HttpBackend, HttpClient} from '@angular/common/http';

@Injectable()
export class AppConfig {
  static props: AppProps;

  private http: HttpClient;

  constructor(private httpBackend: HttpBackend) {
    this.http = new HttpClient(httpBackend);
  }

  async init() {
    const props  = await this.http.get('assets/config.json').toPromise();
    AppConfig.props = props as AppProps;
  }
}

export interface AppProps {
  backend: {
    url: string;
  };
}
