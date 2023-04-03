import {RouterModule, Routes} from '@angular/router';
import {CharacterListComponent} from './character-list/character-list.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  { path: '', component: CharacterListComponent},
  { path: '', redirectTo: 'all', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing = RouterModule.forRoot(routes);
