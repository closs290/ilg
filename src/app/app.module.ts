// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Materials
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// ILG
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { IlgFormComponent } from './ilg-form/ilg-form.component';
import { IlgCollectionComponent } from './ilg-collection/ilg-collection.component';
import { IPAKeyboardComponent } from './ipa-keyboard/ipa-keyboard.component';
import { ilgReducer } from './ilg-store/ilg.reducer';

@NgModule({
    declarations: [
        AppComponent,
        IlgFormComponent,
        IlgCollectionComponent,
        IPAKeyboardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatSliderModule,
        MatInputModule,
        MatSnackBarModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatIconModule,
        StoreModule.forRoot({ilgs: ilgReducer})
    ],
    providers: [ ],
    bootstrap: [AppComponent]
})
export class AppModule { }
