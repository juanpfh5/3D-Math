import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PiramideDecagonalPage } from './piramide-decagonal.page';

describe('PiramideDecagonalPage', () => {
  let component: PiramideDecagonalPage;
  let fixture: ComponentFixture<PiramideDecagonalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PiramideDecagonalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
