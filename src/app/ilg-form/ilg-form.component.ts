// Angular
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';

// ILG App
import { InterlinearGloss, ILGService } from '../ilg.service';

@Component({
  selector: 'app-ilg-form',
  templateUrl: './ilg-form.component.html',
  styleUrls: ['./ilg-form.component.scss']
})
export class IlgFormComponent implements OnInit {

    interlinearGlossForm: FormGroup;
    ilgService: ILGService = new ILGService();

    constructor(
        private formBuilder: FormBuilder
    ) { 
        this.interlinearGlossForm = this.formBuilder.group({
            sourceLanguage: '', 
            author: '',
            year: '',
            morphemeGlossMap: this.formBuilder.array([]),
            freeTranslation: ''
        }); 
    }

    ngOnInit(): void {
        this.addPair();
        alert("Note that all glosses will be cleared on browser refresh");
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

    clear(): void {
        this.interlinearGlossForm.reset();
        this.morphs().clear();
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

}
