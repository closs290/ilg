// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

// Angular Materials
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  exports: [
    MatSnackBarModule
  ],
  declarations: [],
  imports: [
    CommonModule,
    FormBuilder
  ]
})
export class IlgFormModule { }
