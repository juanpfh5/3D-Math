import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PiramideOctagonalPage } from './piramide-octagonal.page';

describe('PiramideOctagonalPage', () => {
  let component: PiramideOctagonalPage;
  let fixture: ComponentFixture<PiramideOctagonalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PiramideOctagonalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
