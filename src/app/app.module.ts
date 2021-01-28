// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Materials
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

// ILG
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { IlgFormComponent } from './ilg-form/ilg-form.component';
import { IlgCollectionComponent } from './ilg-collection/ilg-collection.component';
import { IPAKeyboardComponent } from './ipa-keyboard/ipa-keyboard.component';

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
        StoreModule.forRoot({}, {})
    ],
    providers: [ ],
    bootstrap: [AppComponent]
})
export class AppModule { }
