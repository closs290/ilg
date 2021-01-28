import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-ilg-form',
  templateUrl: './ilg-form.component.html',
  styleUrls: ['./ilg-form.component.scss']
})
export class IlgFormComponent implements OnInit {

    interlinearGlossForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private _snackBar: MatSnackBar
    ) { }

    ngOnInit(): void {
        this.interlinearGlossForm = this.formBuilder.group({
            sourceLanguage: '', // enum/string
            datasetCitation: '',
            morphemeGlossMap: new Map<string, string>(),
            freeTranslation: ''
        });
    }

    onSubmit(): void {
        console.dir(this.interlinearGlossForm);
        this.giveUserSuccessResponse();
    }

    giveUserSuccessResponse() {
        this._snackBar.open("Interlinear gloss entered", "OK", {
            duration: 10000
        })
    };

}
