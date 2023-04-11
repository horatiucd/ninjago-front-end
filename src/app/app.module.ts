import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CharacterListComponent } from './character-list/character-list.component';
import {AppRoutingModule} from './app-routing.module';
import { CharacterComponent } from './character/character.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CharacterServiceInterceptor} from './mocks/character-service-interceptor';

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
    { provide: HTTP_INTERCEPTORS, useClass: CharacterServiceInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
