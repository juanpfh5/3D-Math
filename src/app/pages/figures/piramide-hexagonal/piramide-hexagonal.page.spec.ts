import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PiramideHexagonalPage } from './piramide-hexagonal.page';

describe('PiramideHexagonalPage', () => {
  let component: PiramideHexagonalPage;
  let fixture: ComponentFixture<PiramideHexagonalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PiramideHexagonalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
