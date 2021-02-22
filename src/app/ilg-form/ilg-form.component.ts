// Angular
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

// NGRX
import { Store } from '@ngrx/store';

// ILG
import { createInterlinearText } from '../ilg-store/ilg.actions';
import { InterlinearGloss } from '../ilg-store/ilg.reducer';

@Component({
  selector: 'app-ilg-form',
  templateUrl: './ilg-form.component.html',
  styleUrls: ['./ilg-form.component.scss']
})
export class IlgFormComponent implements OnInit {

    interlinearGlossForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private store: Store,
        private _snackBar: MatSnackBar
    ) { 
        this.interlinearGlossForm = this.formBuilder.group({
            sourceLanguage: '', // enum/string
            datasetCitation: '',
            morphemeGlossMap: this.formBuilder.array([]),
            freeTranslation: ''
        }); //test
    }

    ngOnInit(): void {
        this.addPair();
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
            year: this.interlinearGlossForm.value.datasetCitation,
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
