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
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';

// ILG
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IlgFormComponent } from './ilg-form/ilg-form.component';
import { KeysPipe } from './ilg-form/keys.pipe';

@NgModule({
    declarations: [
        AppComponent,
        IlgFormComponent,
        KeysPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatIconModule,
        MatSelectModule,
        MatTabsModule
    ],
    providers: [ ],
    bootstrap: [AppComponent]
})
export class AppModule { }
