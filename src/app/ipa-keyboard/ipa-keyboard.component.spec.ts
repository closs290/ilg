import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPAKeyboardComponent } from './ipa-keyboard.component';

describe('IPAKeyboardComponent', () => {
  let component: IPAKeyboardComponent;
  let fixture: ComponentFixture<IPAKeyboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IPAKeyboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IPAKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
