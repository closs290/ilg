// Angular
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

//RXJS
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

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
        private _snackBar: MatSnackBar
    ) { 
        this.interlinearGlossForm = this.formBuilder.group({
            sourceLanguage: '', 
            datasetCitation: '',
            year: '',
            morphemeGlossMap: this.formBuilder.array([]),
            freeTranslation: ''
        }); 
    }

    ngOnInit(): void {
        this.addPair();
        this.languages = this.autoCompleteControl.valueChanges.pipe(
            startWith(''),
            map((currentLanguage: string) => this._filterLanguages(currentLanguage))
        );

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
        console.dir("Current form values:" + this.interlinearGlossForm.value);
        this.giveUserSuccessResponse();
    }

    giveUserSuccessResponse() {
        console.info("Current form: " + this.interlinearGlossForm.value);
        this._snackBar.open("Interlinear gloss entered", "OK", {
            duration: 10000
        })
    };

}
