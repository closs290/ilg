// Angular
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';

import { BehaviorSubject } from 'rxjs';

// ILG App
import { InterlinearGloss, ILGService } from '../ilg.service';
import { FONTS } from './fonts';
import { standardAbbreviation, LIST_OF_STANDARD_ABBREVIATIONS } from './glosses';
import { punctuation, PUNCTUATION} from './punctuation';

@Component({
  selector: 'app-ilg-form',
  templateUrl: './ilg-form.component.html',
  styleUrls: ['./ilg-form.component.scss']
})
export class IlgFormComponent implements OnInit {

    interlinearGlossForm: FormGroup;
    ilgService: ILGService = new ILGService();
    showOrthography = new BehaviorSubject<Boolean>(false);
    glossOptions: standardAbbreviation[] = LIST_OF_STANDARD_ABBREVIATIONS;
    punctuationOptions: punctuation[] = PUNCTUATION;
    fonts = FONTS;
    currDate = new Date(Date.now());

    constructor(
        private formBuilder: FormBuilder
    ) { 
        this.interlinearGlossForm = this.formBuilder.group({
            fontForm: '',
            sourceLanguage: '', 
            author: '',
            year: '',
            morphemeGlossMap: this.formBuilder.array([]),
            freeTranslation: ''
        }); 
    }

    ngOnInit(): void {
        this.addPair();
    }

    toggleOrthoLayer() {
        this.showOrthography.next(!this.showOrthography.value);
    }

    addPair(): void {
        this.morphs().push(this.newMorphGlossPair());
    }

    submit() {
        const newIlg = {
            language: this.interlinearGlossForm.value.sourceLanguage, 
            author: this.interlinearGlossForm.value.author,
            year: this.interlinearGlossForm.value.year,
            phrases: this.interlinearGlossForm.value.morphemeGlossMap,
            freeTranslation: this.interlinearGlossForm.value.freeTranslation
        } as InterlinearGloss;
        this.ilgService.InterlinearGlossBank.next([...this.ilgService.InterlinearGlossBank.value, newIlg]);
        this.interlinearGlossForm.get('freeTranslation').reset();
        this.morphs().clear();
        this.addPair();
    }

    morphs(): FormArray {
        return this.interlinearGlossForm.get("morphemeGlossMap") as FormArray;
    }    

    newMorphGlossPair(): FormGroup {
        return this.formBuilder.group({
            orthography: '',
            morph: '',
            gloss: '',
            abbreviation: ''
        });
    }

    // currently does not work
    copyTable() {
        let copiedILG = document.createElement("table");
        let titleRow = document.createElement("tr");
        let titleText = document.createElement("td");
        let langAuthorYearPage = document.createTextNode(
            "<strong>" + this.interlinearGlossForm.value.sourceLanguage +
            "</strong> (" + this.interlinearGlossForm.value.author + ", " +
            this.interlinearGlossForm.value.year + ")");
        titleText.appendChild(langAuthorYearPage);
        titleRow.appendChild(titleText);
        copiedILG.appendChild(titleRow);

        copiedILG.style.position = "absolute";
        copiedILG.style.top = "0px";
        copiedILG.style.left = "0px";
        copiedILG.style.zIndex = "-1";

        copiedILG.focus();
        // copiedILG.select();
        document.execCommand("copy");
    }

}
