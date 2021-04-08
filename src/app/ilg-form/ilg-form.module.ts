// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

// Angular Materials
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';

import { KeysPipe } from './keys.pipe';

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatTabsModule
  ],
  declarations: [ KeysPipe ],
  imports: [
    CommonModule,
    FormBuilder
  ]
})
export class IlgFormModule { }
