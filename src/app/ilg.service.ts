import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface InterlinearGloss {
    language: string, 
    author: string,
    year: string,
    phrases: [],
    freeTranslation: string
}

@Injectable({
  providedIn: 'root'
})
export class InterlinearGlossService {

  InterlinearGlossBank = new BehaviorSubject<InterlinearGloss[]>(
    [
      {
        language: '',
        author: '',
        year: '',
        phrases: [],
        freeTranslation: ''
      }
    ]
  );

  constructor() {}
}