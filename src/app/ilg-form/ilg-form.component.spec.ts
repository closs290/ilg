import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlgFormComponent } from './ilg-form.component';

describe('IlgFormComponent', () => {
  let component: IlgFormComponent;
  let fixture: ComponentFixture<IlgFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
});
