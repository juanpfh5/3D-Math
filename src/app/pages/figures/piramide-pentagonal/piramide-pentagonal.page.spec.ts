import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PiramidePentagonalPage } from './piramide-pentagonal.page';

describe('PiramidePentagonalPage', () => {
  let component: PiramidePentagonalPage;
  let fixture: ComponentFixture<PiramidePentagonalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PiramidePentagonalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
