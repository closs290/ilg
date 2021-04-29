import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IlgFormComponent } from './ilg-form/ilg-form.component';
import { DatabaseListComponent } from './database-list/database-list.component';

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
    component: DatabaseListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
