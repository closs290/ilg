// Angular
import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

// NGRX
import { Store } from '@ngrx/store';

//RXJS
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

// ILG
import { createInterlinearText } from '../ilg-store/ilg.actions';
import { InterlinearGloss } from '../ilg-store/ilg.reducer';
import { LANGUAGES } from './languages';
import { standardAbbreviation, LIST_OF_STANDARD_ABBREVIATIONS } from './glosses';

@Component({
  selector: 'app-ilg-form',
  templateUrl: './ilg-form.component.html',
  styleUrls: ['./ilg-form.component.scss']
})
export class IlgFormComponent implements OnInit {

    interlinearGlossForm: FormGroup;
    languageOptions: string[] = [...LANGUAGES];
    glossOptions: standardAbbreviation[] = [...LIST_OF_STANDARD_ABBREVIATIONS];
    languages: Observable<string[]>;
    glosses: Observable<standardAbbreviation[]>;
    autoCompleteControl = new FormControl();

    constructor(
        private formBuilder: FormBuilder,
        private store: Store,
        private _snackBar: MatSnackBar
    ) { 
        this.interlinearGlossForm = this.formBuilder.group({
            sourceLanguage: '', // enum/string
            datasetCitation: '',
            year: '',
            morphemeGlossMap: this.formBuilder.array([]),
            freeTranslation: ''
        }); //test
    }

    ngOnInit(): void {
        this.addPair();
        this.languages = this.autoCompleteControl.valueChanges.pipe(
            startWith(''),
            map((currentLanguage: string) => this._filterLanguages(currentLanguage))
        );

        // In future: categorize: https://stackblitz.com/angular/gggyoobpvmx?file=src%2Fapp%2Fautocomplete-optgroup-example.ts 
        this.glosses = this.autoCompleteControl.valueChanges.pipe(
            startWith(''),
            map((currentGloss: standardAbbreviation) => currentGloss ? this._filterGlosses(currentGloss) : LIST_OF_STANDARD_ABBREVIATIONS.slice())
        );
    }

    _filterLanguages(value: string): string[] {
        const filterValue = value.toLowerCase();
        return this.languageOptions.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    }

    _filterGlosses(value: standardAbbreviation): standardAbbreviation[] {
        const filterValue = value.abbreviation.toLowerCase();
        return this.glossOptions.filter(option => option.abbreviation.toLowerCase().indexOf(filterValue) === 0);
    }

    morphs(): FormArray {
        return this.interlinearGlossForm.get("morphemeGlossMap") as FormArray;
    }

    addPair(): void {
        this.morphs().push(this.newMorphGlossPair());
    }

    newMorphGlossPair(): FormGroup {
        return this.formBuilder.group({
            morph: '',
            gloss: ''
        });
    }

    onSubmit(): void {
        console.dir(this.interlinearGlossForm.value);
        const newIlg = {
            language: this.interlinearGlossForm.value.sourceLanguage,
            datasetAuthor: this.interlinearGlossForm.value.datasetCitation,
            year: this.interlinearGlossForm.value.year,
            phrases: [], // TODO: transform form entry to 'phrase' type
            freeTranslation: this.interlinearGlossForm.value.freeTranslation
        } as InterlinearGloss;
        this.store.dispatch(createInterlinearText({ ilg: newIlg }));
        this.giveUserSuccessResponse();
    }

    giveUserSuccessResponse() {
        this._snackBar.open("Interlinear gloss entered", "OK", {
            duration: 10000
        })
    };

}

@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    let keys = [];
    for (let key in value) {
      keys.push(key);
    }
    return keys;
  }
}
