import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IlgFormComponent } from './ilg-form/ilg-form.component';

const routes: Routes = [
  {
    path: '',
    component: IlgFormComponent
  },
  {
    path: 'form',
    component: IlgFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
