// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Materials
import { MatSliderModule } from '@angular/material/slider';

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
    MatSliderModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
