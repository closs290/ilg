import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

import { ILGModel } from '../../../backend/models/ilg.model';
import { ILGService } from '../ilg.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  ILGList$: Observable<ILGModel[]>;
  selectedCharacter: ILGModel;

  constructor(
    private ilgService: ILGService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ILGList$ = this.ilgService.listAllCharacters();
  }

  goHome() {
    this.router.navigate(['/']);
  }

  deleteCharacter(id: string) {
    this.ilgService.deleteCharacter(id).subscribe();
    this.ILGList$ = this.ilgService.listAllCharacters();
    this.router.navigate(['/list']);
  }

  onSelect(ilg: ILGModel): void {
    this.selectedCharacter = ilg;
  }

}
