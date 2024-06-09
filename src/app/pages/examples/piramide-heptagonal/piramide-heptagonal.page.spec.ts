import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PiramideHeptagonalPage } from './piramide-heptagonal.page';

describe('PiramideHeptagonalPage', () => {
  let component: PiramideHeptagonalPage;
  let fixture: ComponentFixture<PiramideHeptagonalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PiramideHeptagonalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
