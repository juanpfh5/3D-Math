import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PiramideEneagonalPage } from './piramide-eneagonal.page';

describe('PiramideEneagonalPage', () => {
  let component: PiramideEneagonalPage;
  let fixture: ComponentFixture<PiramideEneagonalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PiramideEneagonalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
