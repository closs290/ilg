// Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

// NGRX, RXJS
import { StoreModule } from '@ngrx/store';

// ILG
import { IlgFormComponent } from './ilg-form.component';

describe('IlgFormComponent', () => {
  let component: IlgFormComponent;
  let fixture: ComponentFixture<IlgFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatSnackBarModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot({})
      ],
      declarations: [ IlgFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IlgFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form using formbuilder', () => {
    expect(component.interlinearGlossForm instanceof FormGroup).toBeTruthy();
  });
});
