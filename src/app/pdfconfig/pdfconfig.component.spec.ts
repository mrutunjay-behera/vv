import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfconfigComponent } from './pdfconfig.component';

describe('PdfconfigComponent', () => {
  let component: PdfconfigComponent;
  let fixture: ComponentFixture<PdfconfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfconfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
