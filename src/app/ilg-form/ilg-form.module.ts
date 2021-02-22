// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

// Angular Materials
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [],
  imports: [
    CommonModule,
    FormBuilder
  ]
})
export class IlgFormModule { }
