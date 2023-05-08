import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CharacterListComponent} from './character-list/character-list.component';
import {AppRoutingModule} from './app-routing.module';
import {CharacterComponent} from './character/character.component';
import {HttpClientModule} from '@angular/common/http';
import {AppConfig} from './app-config';

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
    AppConfig,
    { provide: APP_INITIALIZER, useFactory: appInit, deps: [AppConfig], multi: true }
    // Uncomment to mock the back-end: { provide: HttpXhrBackend, useClass: MockHttpBackend }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

function appInit(appConfig: AppConfig) {
  return async () => {
    await appConfig.init();
  };
}
