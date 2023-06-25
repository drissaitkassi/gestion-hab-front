import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitDemandeComponent } from './init-demande.component';

describe('InitDemandeComponent', () => {
  let component: InitDemandeComponent;
  let fixture: ComponentFixture<InitDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitDemandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
