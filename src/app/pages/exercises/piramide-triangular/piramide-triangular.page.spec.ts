import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PiramideTriangularPage } from './piramide-triangular.page';

describe('PiramideTriangularPage', () => {
  let component: PiramideTriangularPage;
  let fixture: ComponentFixture<PiramideTriangularPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PiramideTriangularPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
