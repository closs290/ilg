import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ILGModel } from '../../../backend/models/ilg.model';
import { ILGService } from '../ilg.service';
import { FONTS } from '../ilg-form/fonts';

@Component({
  selector: 'app-database-list',
  templateUrl: './database-list.component.html',
  styleUrls: ['./database-list.component.scss']
})
export class DatabaseListComponent implements OnInit {

  ILGList$: Observable<ILGModel[]>;
  selectedCharacter: ILGModel;
  fontForm: FormGroup;
  fonts = FONTS;
  currDate = new Date(Date.now());

  constructor(
    private ilgService: ILGService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { 
    this.fontForm = this.formBuilder.group({
      thisFont: ''
    });
  }

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
