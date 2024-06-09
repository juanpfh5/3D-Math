import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PiramideCuadrangularPage } from './piramide-cuadrangular.page';

describe('PiramideCuadrangularPage', () => {
  let component: PiramideCuadrangularPage;
  let fixture: ComponentFixture<PiramideCuadrangularPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PiramideCuadrangularPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
