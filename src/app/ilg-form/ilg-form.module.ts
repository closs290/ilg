// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

// Angular Materials
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatSnackBarModule
  ],
  declarations: [],
  imports: [
    CommonModule,
    FormBuilder
  ]
})
export class IlgFormModule { }
