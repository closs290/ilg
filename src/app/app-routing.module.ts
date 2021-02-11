import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IlgFormComponent } from './ilg-form/ilg-form.component';
import { IlgCollectionComponent } from './ilg-collection/ilg-collection.component';
import { LeipzigLibraryComponent } from './leipzig-library/leipzig-library.component';

const routes: Routes = [
  {
      path: 'form',
      component: IlgFormComponent
  },
  {
    path: 'collection',
    component: IlgCollectionComponent
  },
  {
    path: 'leipzig',
    component: LeipzigLibraryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// IlgCollectionComponent
