import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CharacterListComponent} from './character-list/character-list.component';
import {AppRoutingModule} from './app-routing.module';
import {CharacterComponent} from './character/character.component';
import {HttpClientModule, HttpXhrBackend} from '@angular/common/http';
import {MockHttpBackend} from './mocks/mock-http-backend';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HttpXhrBackend, useClass: MockHttpBackend }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
