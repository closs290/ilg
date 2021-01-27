import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlgCollectionComponent } from './ilg-collection.component';

describe('IlgCollectionComponent', () => {
  let component: IlgCollectionComponent;
  let fixture: ComponentFixture<IlgCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IlgCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IlgCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
