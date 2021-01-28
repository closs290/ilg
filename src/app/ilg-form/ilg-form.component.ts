import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ilg-form',
  templateUrl: './ilg-form.component.html',
  styleUrls: ['./ilg-form.component.scss']
})
export class IlgFormComponent implements OnInit {

    interlinearGlossForm = this.formBuilder.group({
        sourceLanguage: '', // enum/string
        datasetCitation: '',
        morphemeGlossMap: new Map<string, string>(),
        freeTranslation: ''
    });

    constructor(
        private formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
    }

    onSubmit(): void {
        console.dir(this.interlinearGlossForm);
    }

}
