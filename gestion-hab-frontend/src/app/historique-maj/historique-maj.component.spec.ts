import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueMajComponent } from './historique-maj.component';

describe('HistoriqueMajComponent', () => {
  let component: HistoriqueMajComponent;
  let fixture: ComponentFixture<HistoriqueMajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriqueMajComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueMajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
