// Angular
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule, FormControl } from '@angular/forms';

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
    formatForm: FormGroup;
    // selectedFont: string;
    languageOptions: string[] = [...LANGUAGES];
    glossOptions: standardAbbreviation[] = [...LIST_OF_STANDARD_ABBREVIATIONS];
    languages: Observable<string[]>;
    glosses: Observable<standardAbbreviation[]>;
    autoCompleteControl = new FormControl();

    constructor(
        private formBuilder: FormBuilder
    ) { 
        this.interlinearGlossForm = this.formBuilder.group({
            sourceLanguage: '', 
            author: '',
            year: '',
            page: '',
            morphemeGlossMap: this.formBuilder.array([]),
            freeTranslation: ''
        }); 
        this.formatForm = this.formBuilder.group({
            selectedFont: ''
        })
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

    clear(): void {
        this.interlinearGlossForm.reset();
        this.morphs().clear();
        this.addPair();
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

    getFormat() {
        let myStyles = {
            'font-face': this.formatForm.value.selectedFont
        }
        return myStyles;
    }

}
