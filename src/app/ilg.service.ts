import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { ILGModel } from '../../backend/models/ilg.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ILGService {
  API_URL: string = environment.apiUrl;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  InterlinearGlossBank = new BehaviorSubject<ILGModel[]>(
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

  constructor(
    private httpClient: HttpClient, 
    public router: Router
  ) { }

  listAllCharacters(): Observable<ILGModel[]> {
    return this.httpClient.get<ILGModel[]>(`${this.API_URL}/ilgs/`);
  }

  retrieveOneCharacter(ilgId: string): Observable<ILGModel> {
    return this.httpClient.get<any>(`${this.API_URL}/ilgs/${ilgId}`);
  }

  postNewCharacter(ILGData: ILGModel): Observable<ILGModel> {
    return this.httpClient.post<ILGModel>(`${this.API_URL}/ilgs/`, ILGData);
  }

  updateCharacter(ilgId: string, characterData: ILGModel) {
    return this.httpClient.put<ILGModel>(`${this.API_URL}/ilgs/${ilgId}`, characterData);
  } 

  deleteCharacter(ilgId: string) {
    return this.httpClient.delete(`${this.API_URL}/ilgs/${ilgId}`);
  } 
  
}
