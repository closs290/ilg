// Angular
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

// ILG App
import { ILGService } from '../ilg.service';
import { ILGModel } from '../../../backend/models/ilg.model';
import { FONTS } from './fonts';

@Component({
  selector: 'app-ilg-form',
  templateUrl: './ilg-form.component.html',
  styleUrls: ['./ilg-form.component.scss']
})
export class IlgFormComponent implements OnInit {

    ILGList$: Observable<ILGModel[]>;
    interlinearGlossForm: FormGroup;
    currDate = new Date(Date.now());
    fonts = FONTS;
    error: string;

    constructor(
        private ilgService: ILGService,
        private formBuilder: FormBuilder,
        private router: Router
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
        this.ILGList$ = this.ilgService.listAllCharacters();
    }

    submit() {
        const newIlg = {
            language: this.interlinearGlossForm.value.sourceLanguage, 
            author: this.interlinearGlossForm.value.author,
            year: this.interlinearGlossForm.value.year,
            phrases: this.interlinearGlossForm.value.morphemeGlossMap,
            freeTranslation: this.interlinearGlossForm.value.freeTranslation
        } as ILGModel;
        this.ilgService.InterlinearGlossBank.next([...this.ilgService.InterlinearGlossBank.value, newIlg]);
        this.interlinearGlossForm.get('freeTranslation').reset();
        this.morphs().clear();
        this.addPair();
    }

    sendILGToDB() {
        this.ilgService.postNewCharacter({
            language: this.interlinearGlossForm.value.sourceLanguage, 
            author: this.interlinearGlossForm.value.author,
            year: this.interlinearGlossForm.value.year,
            phrases: this.interlinearGlossForm.value.morphemeGlossMap,
            freeTranslation: this.interlinearGlossForm.value.freeTranslation
        } as ILGModel ).pipe(first())
        .subscribe( // Note the subscription on the service post here.
          data => {
            window.alert('This was submitted publically, for all to see');
          },
          error => {
            this.error = error;
          }
        );
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

    viewDB() {
        this.router.navigate(['/list']);
    }

}