import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprouverDemandeComponent } from './approuver-demande.component';

describe('ApprouverDemandeComponent', () => {
  let component: ApprouverDemandeComponent;
  let fixture: ComponentFixture<ApprouverDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprouverDemandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprouverDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
