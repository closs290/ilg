import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { InterlinearGloss, phrase, word, morphemeGlossMap } from './ilg-store/ilg.reducer';
import { interlinearText } from './ilg.type';

@Injectable({
  providedIn: 'root'
})
export class InterlinearGlossService {

  InterlinearGlossBank: BehaviorSubject<InterlinearGloss[]>;

  constructor() { 
      this.InterlinearGlossBank.next([{
        language: '',
        datasetAuthor: '',
        year: 0,
        phrases: [],
        freeTranslation: ''
      } as InterlinearGloss]);
  }
}
