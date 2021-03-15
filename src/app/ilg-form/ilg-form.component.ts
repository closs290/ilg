// Angular
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule, FormControl } from '@angular/forms';

//RXJS
import { Observable } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';

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
    languageOptions: string[] = LANGUAGES;
    glossOptions: standardAbbreviation[] = LIST_OF_STANDARD_ABBREVIATIONS;
    filteredLanguages: Observable<string[]>;
    filteredGlosses: Observable<standardAbbreviation[]>;
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
        this.filteredLanguages = this.autoCompleteControl.valueChanges.pipe(
            startWith(''),
            map((currentLanguage: string) => this._filterLanguages(currentLanguage))
        );

        this.filteredGlosses = this.autoCompleteControl.valueChanges.pipe(
            startWith(''),
            map(value => typeof value === 'string' ? value : value.abbreviation),
            map((currentGloss) => currentGloss ? this._filterGlosses(currentGloss) : this.glossOptions.slice())
        );
    }

    clear(): void {
        this.interlinearGlossForm.reset();
        this.morphs().clear();
        this.addPair();
    }

    displayGloss(gloss: standardAbbreviation): string {
        return gloss && gloss.abbreviation ? gloss.abbreviation : '';
    }

    _filterLanguages(value: string): string[] {
        if (value) {
            const filterValue = value.toLowerCase();
            return this.languageOptions.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
        }
    }

    _filterGlosses(glossAbbrev: string): standardAbbreviation[] {
        const filterValue = glossAbbrev.toLowerCase();
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
