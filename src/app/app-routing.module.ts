import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IlgFormComponent } from './ilg-form/ilg-form.component';
import { CharacterListComponent } from './character-list/character-list.component';

const routes: Routes = [
  {
    path: '',
    component: IlgFormComponent
  },
  {
    path: 'form',
    component: IlgFormComponent
  },
  {
    path: 'list',
    component: CharacterListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
